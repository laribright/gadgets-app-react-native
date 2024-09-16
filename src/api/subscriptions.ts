import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { supabase } from '../lib/supabase';

export const useOrderUpdateSubscription = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscriptionResponse = supabase
      .channel('custom-update-channel')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'order' },
        payload => {
          console.log('Change received!', payload);
          queryClient.invalidateQueries({
            queryKey: ['orders'],
          });
        }
      )
      .subscribe();

    return () => {
      subscriptionResponse.unsubscribe();
    };
  }, []);
};
