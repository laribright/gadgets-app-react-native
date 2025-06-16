

const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    // Create a directory for our web version of react-native-stripe
    config.resolve.alias['@stripe/stripe-react-native'] = path.resolve(
      __dirname, 'web/react-native-stripe',
    );
    return config;
  },
};

