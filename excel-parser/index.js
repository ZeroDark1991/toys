'use strict'

const fs = require('fs')
const xlsx = require('node-xlsx')
const path = require('path')

let workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/tar.xlsx`))

let sheet1 = workSheetsFromBuffer[0].data.map(item => item[1]).slice(1)
let sheet2 = workSheetsFromBuffer[1].data.map(item => item[0]).slice(1)

let h = sheet2.forEach(item => {
	let result = sheet1.find(data => data == item)
	if(result) {
		for(let i = 0; i < sheet1.length; i++) {
			if(sheet1[i] == result) {
				sheet1.splice(i,1)
			}
		}
	}
})

console.log(sheet1)
