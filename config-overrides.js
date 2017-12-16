const rewireLodash = require('react-app-rewire-lodash');
const path = require(`path`);
const fs = require('fs');

module.exports = function override(config, env) {
  /** Resolve Aliases */
  config.resolve.alias.Components = path.join(
    __dirname, 
    'src/components'
  );
  config.resolve.alias.Src = path.join(
    __dirname, 
    'src'
  );
  config.resolve.alias.Images = path.join(
    __dirname, 
    'src/images'
  );
  config.resolve.alias.Actions = path.join(
    __dirname, 
    'src/actions'
  );
  config.resolve.alias.Reducers = path.join(
    __dirname, 
    'src/reducers'
  );
  config.resolve.alias.Sagas = path.join(
    __dirname, 
    'src/sagas'
  );

  config = rewireLodash(config, env);

  fs.writeFileSync(
    './webpack.config.js', 
    JSON.stringify(config, null, 2), 
    {encoding: 'utf8'}
  );
  
  return config;
};
