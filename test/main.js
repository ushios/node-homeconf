var assert   = require("assert")
var homeconf = require("../")

describe('Home conf.', function(){
    it('static config value check.', function(){
        homeconf.save('.test_conf', {"key":"value"}, function(err){
            homeconf.get('.test_conf', function(err, object){
                assert.equal(object.key, "value")
            })
        })
    })
})
