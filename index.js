const Koa = require('koa')
// const Router = require('koa-router')
// const route = new Router()
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())
  .use(async (ctx, next) => {
    await next()
    ctx.response.body = {
      status: 0,
      msg: '',
      data: ctx.response.body
    }
  })
  .use(require('./routes').routes())

app.listen(3000)