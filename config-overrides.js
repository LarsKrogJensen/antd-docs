const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#00C1DE",
      "@font-family-no-number": "Raleway"
    },
  })(config, env);
  config = injectBabelPlugin('transform-decorators-legacy', config);
  config.resolve.modules = [
    path.resolve('./node_modules'),
    path.resolve('./src')
  ]

  return config;
};