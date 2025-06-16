


// Simple web implementation of @stripe/stripe-react-native
export const useStripe = () => {
  return {
    initPaymentSheet: jest.fn(),
    presentPaymentSheet: jest.fn(),
  };
};

export default {
  useStripe,
};


