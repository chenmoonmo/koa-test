// 聚合router  子路由
const router = require('koa-router')();
const home = require('./home')
const page = require('./page')




router
  .use('/api', home.routes(), home.allowedMethods())
  .use('/api', page.routes(), page.allowedMethods())

module.exports = router


