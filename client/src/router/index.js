import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostComponent from '@/components/PostComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostComponent
    },
    {
      // if user tries to access page that doesn't exist, redirect to posts
      path: '*',
      redirect: 'posts'
    }
  ]
})
