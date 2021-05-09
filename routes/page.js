const page = require('koa-router')()

page.get('/page', async ctx => {
  const { id } = ctx.query
  ctx.response.body = {
    id,
    name: 'this is a page',
    content: 'this is a page,this is a page,this is a page'
  }
})

module.exports = page