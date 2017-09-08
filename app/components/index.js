// "use strict";

// var fs = require('fs')
// var path = require('path');
// var Sequelize = require('sequelize');
// var config = require('../config/config');

// var sequelize = new Sequelize(config.db.url);

// var db = {};

// fs.readdirSync(__dirname)
//   .filter(function(dirOrFile) {
//     return (dirOrFile.indexOf('.') !== 0 && dirOrFile !== 'index.js');
//   })
//   .forEach(function(dir) {
//     let currentPath = path.join(__dirname, dir); 
//     fs.readdirSync(currentPath)
//       .filter(function(dirOrFile) {
//         return (dirOrFile.indexOf('model.js') === 0 && dirOrFile !== 'index.js');
//       })
//       .forEach(function(file) {
//         let model = sequelize.import(path.join(currentPath, file));
//         let modelName = model.name[0].toUpperCase() + model.name.substr(1);
//         db[modelName] = model;
//       });
//   });

// Object.keys(db).forEach(function(modelName) {
//   if ("associate" in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
