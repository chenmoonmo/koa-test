const router = require('koa-router')();


router.get('/home', async ctx => {
  const { name } = ctx.query
  const html = `<h1 style="color: #fe3f10">fuck ${name || 'world'}</h1>`
  ctx.body = html
})

router.post('/home', async ctx => {
  console.log(ctx.request.body)

})

module.exports = router