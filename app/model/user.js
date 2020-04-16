module.exports = (app) => {
  console.log('进入model')
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: String,
    },
    sex: {
      type: String,
    },
    job: {
      type: String,
    },
  })

  // 映射到egg-mongo db 库的users表中（不区分大小写）。会自动把大写变为小写，并添加s
  const User = mongoose.model('User', UserSchema)
  return User
}
