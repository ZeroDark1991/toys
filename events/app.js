'use strict'

const Events = require('./index')

let ins = new Events()

ins.on('afterSuccess', function() {
    console.log('success')
    let args = ([]).slice.call(arguments)
    console.log(args)
})

process.nextTick(() => {
    ins.emit('afterSuccess', 11, 22)
}, 1000)

console.log('subscribe')
