'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async find() {
    const { ctx } = this
    const users = await ctx.model.User.find({})
    return Object.assign(
      {},
      {
        pageNum: 1,
        pageSize: 10,
        list: users
      }
    )
  }
}

module.exports = UserService
