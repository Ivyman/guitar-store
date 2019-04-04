module.exports = function override(config, env) {
    config.module.rules[2].oneOf[5].use[3].options = {
        ...config.module.rules[2].oneOf[5].use[3].options,
        data: `@import "src/styles/_variables.sass";`
    }

    return config;
}