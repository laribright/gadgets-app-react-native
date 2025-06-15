import { Category } from './types/category';
import { PROJECTS } from '.s';

export const CATEGORIES: Category[] = [
  {
    name: 'Laptops',
    slug: 'laptops',
    imageUrl:
      'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg',
    projects: PROJECTS.filter(project => project.category.slug === 'laptops'),
  },
  {
    name: 'Phones',
    slug: 'phones',
    imageUrl:
      'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    projects: PROJECTS.filter(project => project.category.slug === 'phones'),
  },
  {
    name: 'Gaming',
    slug: 'gaming',
    imageUrl:
      'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    projects: PROJECTS.filter(project => project.category.slug === 'gaming'),
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    imageUrl:
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    projects: PROJECTS.filter(
      project => project.category.slug === 'accessories'
    ),
  },
];
