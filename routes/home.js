const router = require('koa-router')();

router.get('/', async ctx => {
  console.log(ctx.headers)
  const html = `<h1 style="color: #fe3f10">fuck world</h1>`
  ctx.body = html
})

module.exports = router