const router = require('koa-router')();

router.get('/home', async ctx => {
  console.log(ctx.headers)
  const { name } = ctx.query
  const html = `<h1 style="color: #fe3f10">fuck ${name || 'world'}</h1>`
  ctx.body = html
})

module.exports = router