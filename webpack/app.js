const webpack = require('webpack')
const config = require('./wp.config.js')

webpack(config, function(err) {
	err && console.log(`bundle error: ${err}`)
})
