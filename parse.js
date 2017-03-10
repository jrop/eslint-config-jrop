const fs = require('fs')
const yaml = require('js-yaml')
module.exports = file => yaml.safeLoad(fs.readFileSync(__dirname + '/' + file, 'utf-8'))
