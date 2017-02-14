// function draw(total, amount = 1) {
// 	var pool = Array(total).fill().map((_,i)=> i+1)
// 	for(var i = total-1, stop = total-amount-1; i > stop; i--) {
// 		var rand = Math.floor(Math.random() * (i + 1))
// 		// [pool[rand], pool[i]] = [pool[i], pool[rand]]
// 		var temp = pool[i]
// 		pool[i] = pool[rand]
// 		pool[rand] = temp
// 	}
// 	return pool.slice(-amount)
// }

// console.log(draw(10,5))

function Box(total) {
	this.cards = Array(total).fill().map((_, i) => i+1)
}

Box.prototype.draw = function(n) {
	var cards = this.cards, len = this.cards.length
	for(var i = len-1, stop = len-n-1; i > stop; i--) {
		var rand = Math.floor(Math.random()*(i+1))
		var temp = cards[i]
		cards[i] = cards[rand]
		cards[rand] = temp
	}
	let result = cards.slice(-n)
	cards.length = (len - n) > 0 ? (len - n) : 0
	return result
}

var instance = new Box(10)

console.log(instance.draw(5), instance.draw(5))
