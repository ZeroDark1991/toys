const Koa = require('koa')
const app = new Koa()
const port = 8000

app.use(async (ctx, next) => {
	console.log('status before request', ctx.status)
	await next()
	console.log('status after request', ctx.status)
})

app.use(async (ctx, next) => {
	let accepts = ctx.accepts('json', 'html', 'text')
	console.log('accepts', accepts)
	ctx.body = 'hello world'
	await next()
})

app.listen(port, () => {
	console.log(`app runing at port:${port}`)
})