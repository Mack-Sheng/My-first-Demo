import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cineamRouter from './cineam'
import mineRouter from './mine'

Vue.use(Router)


export default new Router ({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    movieRouter,
    cineamRouter,
    mineRouter
  ]
})
