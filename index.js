module.exports = require('./parse')('.eslintrc.base.yml')
if (require.main === module)
	console.log(module.exports)
