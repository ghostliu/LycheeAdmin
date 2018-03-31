import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

import BookList from '@/components/book/list'
import BookCategoryList from '@/components/bookcategory/list'

import ProductList from '@/components/product/productList'

import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'

import Index from '@/components/frontPage/index'
import Main from '@/components/frontPage/main'
import Product from '@/components/frontPage/product'
import About from '@/components/frontPage/about'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      title:'产品列表',
      component: Index,
      redirect: '/index',
      children:[{
        path:'index',
        title:'门户主页',
        name:'home_index',
        component:Main
      }]
    },
    {
      path: '/product',
      name: 'product',
      title:'产品列表',
      component: Index,
      children:[{
        path:'index',
        title:'产品列表',
        name:'product_name',
        component:Product
      }]
    },
    {
      path: '/about',
      name: 'about',
      component: Index,
      children:[{
        path:'index',
        title:'关于',
        name:'about_index',
        component:About
      }]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/manage',
      name: 'back_home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '后台首页', menuShow: true}
      ]
    },
    {
      path: '/manage',
      component: Home,
      name: '用户管理',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/user/list', component: UserList, name: '用户列表', menuShow: true}
      ]
    },
    {
      path: '/manage',
      component: Home,
      name: '图书管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {path: '/book/list', component: BookList, name: '图书列表', menuShow: true},
        {path: '/book/category', component: BookCategoryList, name: '图书分类', menuShow: true}
      ]
    },
    {
      path: '/manage',
      component: Home,
      name: '产品管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {path: '/product/productList', component: ProductList, name: '产品列表', menuShow: true},
        {path: '/book/category', component: BookCategoryList, name: '产品分类', menuShow: true}
      ]
    },
    {
      path: '/manage',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [
        {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
        {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  //前台首页，产品页，关于页无需验证
  if (to.path.startsWith('/home') || to.path.startsWith('/product') || to.path.startsWith('/about') ) {
    next()
  } else {
    if (to.path.startsWith('/login')) {
      window.localStorage.removeItem('access-user')
      next()
    } else {
      let user = JSON.parse(window.localStorage.getItem('access-user'))
      if (!user) {
        next({path: '/login'})
      } else {
        next()
      }
    }
  }
})

export default router
