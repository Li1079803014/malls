import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/home'
import Cart from '@/views/cart/cart'
import my from '@/views/my/my'
import catefory from '@/views/catefory/catefory'

Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/home'
      },
     {
       path:'/home',
       component:Home
     },
     {
      path:'/cart',
      component:Cart
     },
     {
      path:'/my',
      component:my
     },
     {
      path:'/catefory',
      component:catefory
     }
]

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router =new VueRouter({
 routes,
 mode:"history"
})

 export default router