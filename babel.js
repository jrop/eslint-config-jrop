module.exports = require('./parse')('.eslintrc.babel.yml')
if (require.main === module)
	console.log(module.exports)
