import { Stack } from 'expo-router';
import { ToastProvider } from 'react-native-toast-notifications';
import AuthProvider from '../providers/auth-provider';
import QueryProvider from '../providers/query-provider';
import { StripeProvider } from '@stripe/stripe-react-native';
import NotificationProvider from '../providers/notification-provider';

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <QueryProvider>
          <StripeProvider
            publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
          >
            <NotificationProvider>
              <Stack>
                <Stack.Screen
                  name='(shop)'
                  options={{ headerShown: false, title: 'Shop' }}
                />
                <Stack.Screen
                  name='categories'
                  options={{ headerShown: false, title: 'Categories' }}
                />
                <Stack.Screen
                  name='product'
                  options={{ headerShown: false, title: 'Product' }}
                />
                <Stack.Screen
                  name='cart'
                  options={{
                    presentation: 'modal',
                    title: 'Shopping Cart',
                  }}
                />
                <Stack.Screen name='auth' options={{ headerShown: false }} />
              </Stack>
            </NotificationProvider>
          </StripeProvider>
        </QueryProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
