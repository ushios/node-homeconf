HomeConf
=========

Add setting file easier

Usage
-----

### Save config

    homeconf.save('.test_conf', {"key":"value"})

You can see config file at

    $ cat ~/.test_conf.json

### Get config

    homeconf.get('.test_conf', function(err, object){
        console.log(object)
    })

Test
=====

Using mocha the command is

    $ npm test