var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/LinkMe',
        port: process.env.PORT || 3030

    },

    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:asdasd@ds039058.mongolab.com:39058/linkmedb',
        port: process.env.PORT || 3030
    }
}