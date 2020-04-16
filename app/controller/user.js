'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async getUserList() {
    const { ctx } = this
    // 假装这是从数据库读取的数据
    const Users = await ctx.service.user.find({})

    ctx.body = Users
  }
}

module.exports = UserController
