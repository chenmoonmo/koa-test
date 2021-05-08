const Koa = require('koa')
const Router = require('koa-router')
const route = new Router()
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())

app.use(async (ctx, next) => {
  await next()
}).use(require('./routes/home.js').routes())
  .use(route.allowedMethods())

app.listen(3000)