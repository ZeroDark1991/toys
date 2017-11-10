const _ = require('lodash')

let foo = ['', 11, 22, '']

let result = _.without(foo.map(val => val ? val : null), null)

console.log(result)