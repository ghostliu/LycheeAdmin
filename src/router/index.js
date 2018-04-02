import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/frontPage/index'
import Home from '@/components/Home'

Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home2',
      title:'首页',
      component: Index,
      redirect: '/index',
      children:[
        {
          path:'index', 
          name:'home_index2', 
          meta:{
            title: '江阴天通铝业 - 首页',
            requiresAuth: false // 区分前台与后台,是否需要验证
          }, 
          component: resolve => {
            // 懒加载方式，当路由被访问的时候才加载对应组件
            require(['@/components/frontPage/main'], resolve)
          }
        }]
    },
    {
      path: '/home',
      name: 'home',
      title:'首页',
      component: Index,
      redirect: '/index',
      children:[
        {
          path:'index',  
          name:'home_index', 
          meta:{
            title: '江阴天通铝业 - 首页',
            requiresAuth: false // 区分前台与后台,是否需要验证
          }, 
          component: resolve => {
            require(['@/components/frontPage/main'], resolve)
          }
        }]
    },
    {
      path: '/products',
      name: 'product',
      title:'产品列表',
      component: Index,
      children:[
        {
          path:'index',  
          name:'product_index', 
          meta:{
            title: '江阴天通铝业 - 产品列表',
            requiresAuth: false // 区分前台与后台,是否需要验证
          }, 
          component: resolve => {
            require(['@/components/frontPage/Product'], resolve)
          }
        }]
    },
    {
      path: '/about',
      name: 'about',
      component: Index,
      children:[
        {
          path:'index',  
          name:'about_index', 
          meta:{
            title: '江阴天通铝业 - 关于',
            requiresAuth: false // 区分前台与后台,是否需要验证
          }, 
          component: resolve => {
            require(['@/components/frontPage/about'], resolve)
          }
        }]
    },
    {
      path: '/login',
      title:'登录',
      name: 'login',
      meta: {
        title:'江阴天通铝业后台管理 - Login'
      },
      component: resolve => {
        require(['@/components/Login'], resolve)
      }
    },
    {
      path: '/manage',
      name: 'manage',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true, // 菜单是否显示
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {
          path: '/dashboard', 
          name: 'Dashboard',
          meta: {
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/Dashboard'], resolve)
          }
        }]
    },
    {
      path: '/manage',
      component: Home,
      name: '用户管理',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {
          path: '/user/list', 
          name: '用户列表', 
          meta: {
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/user/list'], resolve)
          }
        }]
    },
    {
      path: '/manage',
      component: Home,
      name: 'book_manage',
      menuShow: false, 
      iconCls: 'iconfont icon-books',
      children: [
        {
          path: '/book/list', 
          name: 'book_list', 
          meta: {
            title:'江阴天通铝业后台管理',
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/book/list'], resolve)
          }
        },
        {
          path: '/book/category', 
          name: 'book_category', 
          meta: {
            title:'江阴天通铝业后台管理',
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/bookcategory/list'], resolve)
          }
        }]
    },
    {
      path: '/manage',
      component: Home,
      name: '产品管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {
          path: '/product/productList', 
          name: '产品列表', 
          meta: {
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/product/productList'], resolve)
          }
        }]
    },
    {
      path: '/manage',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {
          path: '/user/profile', 
          name: '个人信息', 
          meta: {
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/user/profile'], resolve)
          }
        },
        {
          path: '/user/changepwd', 
          name: '修改密码', 
          meta: {
            requiresAuth: true
          },
          menuShow: true,
          component: resolve => {
            require(['@/components/user/changepwd'], resolve)
          }
        }]

    }]
})

router.beforeEach((to, from, next) => {
  //console.log('to:' + to.meta.requiresAuth)
  //前台首页，产品页，关于页无需验证
  if (!to.meta.requiresAuth) {
    next()
  } else {
    if (to.name === 'login') {
      window.localStorage.removeItem('access-user')
      next()
    } else {
      let user = JSON.parse(window.localStorage.getItem('access-user'))
      // 在访问后台时并且无登录信息才中转至登录页
      if (!user) {
        next({path: '/login'})
      } else {
        next()
      }
    }
  }
})

export default router
