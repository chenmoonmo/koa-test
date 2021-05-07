const Koa = require('koa')
const Router = require('koa-router')
const route = new Router()

const app = new Koa()

console.log(require('./routes/home.js'))
app.use(async (ctx, next) => {
  ctx.headers.token = '12345'
  await next()
  ctx.body += 123
}).use(require('./routes/home.js').routes())
  .use(route.allowedMethods())

app.listen(3000)