exports.mongoose = {
  client: {
    url: 'mongodb://47.111.249.97:27017/koa',
    options: {
      authSource: 'admin',
      user: 'MGDBuser',
      pass: 'MGDBpassword'
    }
    // mongoose global plugins, expected a function or an array of function and options
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]]
  }
}
