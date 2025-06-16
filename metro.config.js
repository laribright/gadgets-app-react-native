// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const webDiscardLib = ["@stripe/stripe-react-native", "expo-notifications"]

config.resolver.resolveRequest = (context, moduleName, platform) => {
    if (platform === "web" && webDiscardLib.includes(moduleName) ) {
        return {
            type: "empty"
         }
    }
    if (moduleName === 'zustand' || moduleName.startsWith('zustand/')) {
        //? Resolve to its CommonJS entry (fallback to main/index.js)
        return {
            type: 'sourceFile',
            //? require.resolve will pick up the CJS entry (index.js) since "exports" is bypassed
            filePath: require.resolve(moduleName)
        };
    }

    return context.resolveRequest(context, moduleName, platform);
}

module.exports = config;
