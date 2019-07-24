const PostsController = require('./controllers/PostsController')

module.exports = (app) => {
  app.get('/posts',
    PostsController.index)

  app.post('/posts',
    PostsController.create)

  app.get('/posts/:id',
    PostsController.delete)
}
