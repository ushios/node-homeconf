var fs      = require('fs')
var process = require('process')

var HomeConf = {
    homeDir: null,

    setHomeDir: function(homeDir) {
        this.homeDir = homeDir
    },

    getHomeDir: function() {
        return this.homeDir
    },

    getConfFilePath: function(fileName) {
        var homeDir = this.getHomeDir();

        return homeDir + '/' + fileName + '.json'
    },

    save: function(fileName, object, callback) {
        var filePath = this.getConfFilePath(fileName)

        fs.writeFile( filePath, JSON.stringify(object), function(err){
            if( typeof(callback) == 'function') callback(err)
        })
    },

    get: function(fileName, callback) {
        var filePath = this.getConfFilePath(fileName)

        fs.readFile( filePath, 'utf8', function (err, text){
            var object = JSON.parse(text);
            if( typeof(callback) == 'function') callback(err, object)
        })
    }
}

// Exports
module.exports = HomeConf

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']
}

HomeConf.setHomeDir(getUserHome())
