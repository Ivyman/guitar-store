module.exports = function override(config, env) {
    // Add for loader: 'sass-loader'
    config.module.rules[2].oneOf[5].use[4].options = {
        ...config.module.rules[2].oneOf[5].use[4].options,
        data: `@import "src/styles/_variables.sass";`
    };
    return config;
};
