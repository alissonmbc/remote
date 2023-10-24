const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 module.exports = withModuleFederationPlugin({

  name: 'remote',

   exposes: {
     "./TesteModule": './src/app/teste/teste.module.ts',
   },

   shared: {
     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
   },

 });