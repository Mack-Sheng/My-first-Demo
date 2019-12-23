import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cineamRouter from './cineam'
import mineRouter from './mine'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    movieRouter,
    cineamRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})
