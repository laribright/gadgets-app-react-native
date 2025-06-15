import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { useAuth } from '../providers/auth-provider';
import { generateOrderSlug } from '../utils/utils';

export const getProjectsAndCategories = () => {
  return useQuery({
    queryKey: ['projects', 'categories'],
    queryFn: async () => {
      const [projects, categories] = await Promise.all([
        supabase.from('project').select('*'),
        supabase.from('category').select('*'),
      ]);

      if (projects.error || categories.error) {
        throw new Error('An error occurred while fetching data');
      }

      return { projects: projects.data, categories: categories.data };
    },
  });
};

export const getProject = (slug: string) => {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('project')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error || !data) {
        throw new Error(
          'An error occurred while fetching data: ' + error?.message
        );
      }

      return data;
    },
  });
};

export const getCategoryAndProjects = (categorySlug: string) => {
  return useQuery({
    queryKey: ['categoryAndProjects', categorySlug],
    queryFn: async () => {
      const { data: category, error: categoryError } = await supabase
        .from('category')
        .select('*')
        .eq('slug', categorySlug)
        .single();

      if (categoryError || !category) {
        throw new Error('An error occurred while fetching category data');
      }

      const { data: projects, error: projectsError } = await supabase
        .from('project')
        .select('*')
        .eq('category', category.id);

      if (projectsError) {
        throw new Error('An error occurred while fetching projects data');
      }

      return { category, projects };
    },
  });
};

export const getMyOrders = () => {
  const {
    user: { id },
  } = useAuth();

  return useQuery({
    queryKey: ['orders', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('order')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('user', id);

      if (error)
        throw new Error(
          'An error occurred while fetching orders: ' + error.message
        );

      return data;
    },
  });
};

export const createOrder = () => {
  const {
    user: { id },
  } = useAuth();

  const slug = generateOrderSlug();

  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn({ totalPrice }: { totalPrice: number }) {
      const { data, error } = await supabase
        .from('order')
        .insert({
          totalPrice,
          slug,
          user: id,
          status: 'Pending',
        })
        .select('*')
        .single();

      if (error)
        throw new Error(
          'An error occurred while creating order: ' + error.message
        );

      return data;
    },

    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ['order'] });
    },
  });
};

export const createOrderItem = () => {
  return useMutation({
    async mutationFn(
      insertData: {
        orderId: number;
        projectId: number;
        quantity: number;
      }[]
    ) {
      const { data, error } = await supabase
        .from('order_item')
        .insert(
          insertData.map(({ orderId, quantity, projectId }) => ({
            order: orderId,
            project: projectId,
            quantity,
          }))
        )
        .select('*');

      const projectQuantities = insertData.reduce(
        (acc, { projectId, quantity }) => {
          if (!acc[projectId]) {
            acc[projectId] = 0;
          }
          acc[projectId] += quantity;
          return acc;
        },
        {} as Record<number, number>
      );

      await Promise.all(
        Object.entries(projectQuantities).map(
          async ([projectId, totalQuantity]) =>
            supabase.rpc('decrement_project_quantity', {
              project_id: Number(projectId),
              quantity: totalQuantity,
            })
        )
      );

      if (error)
        throw new Error(
          'An error occurred while creating order item: ' + error.message
        );

      return data;
    },
  });
};

export const getMyOrder = (slug: string) => {
  const {
    user: { id },
  } = useAuth();

  return useQuery({
    queryKey: ['orders', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('order')
        .select('*, order_items:order_item(*, projects:project(*))')
        .eq('slug', slug)
        .eq('user', id)
        .single();

      if (error || !data)
        throw new Error(
          'An error occurred while fetching data: ' + error.message
        );

      return data;
    },
  });
};
