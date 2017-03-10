module.exports = require('./parse')('.eslintrc.react.yml')
if (require.main === module)
	console.log(module.exports)
