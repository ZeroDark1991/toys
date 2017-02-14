const winston = require('winston')

const logger = new winston.Logger({
	transports: [
		new winston.transports.Console (),
		new winston.transports.File ({ filename: 'logfile.log' })
	]
})
logger.level = 'verbose'
logger.log('verbose','some logs111')
logger.log('info','some logs222')
logger.log('verbose','some logs333')
