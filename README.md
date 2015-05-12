HomeConf
=========

[![Build Status](https://travis-ci.org/ushios/node-homeconf.svg?branch=master)](https://travis-ci.org/ushios/node-homeconf)

Add setting file easier

Installation
------------

    $ npm install --save homeconf

Usage
-----

    var homeconf = require('homeconf')

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