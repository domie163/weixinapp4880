import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xiaoyanyuan from '@/views/modules/xiaoyanyuan/list'
    import xiaomingxingzhanshi from '@/views/modules/xiaomingxingzhanshi/list'
    import baomingzhuangtai from '@/views/modules/baomingzhuangtai/list'
    import tonggaozhuangtai from '@/views/modules/tonggaozhuangtai/list'
    import xiaoxihuifu from '@/views/modules/xiaoxihuifu/list'
    import tonggao from '@/views/modules/tonggao/list'
    import woyaobaoming from '@/views/modules/woyaobaoming/list'
    import xiaoxi from '@/views/modules/xiaoxi/list'
    import qianbao from '@/views/modules/qianbao/list'
    import config from '@/views/modules/config/list'
    import shangjia from '@/views/modules/shangjia/list'
    import zhifuyongjin from '@/views/modules/zhifuyongjin/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xiaoyanyuan',
        name: '小演员',
        component: xiaoyanyuan
      }
      ,{
	path: '/xiaomingxingzhanshi',
        name: '小明星展示',
        component: xiaomingxingzhanshi
      }
      ,{
	path: '/baomingzhuangtai',
        name: '报名状态',
        component: baomingzhuangtai
      }
      ,{
	path: '/tonggaozhuangtai',
        name: '通告状态',
        component: tonggaozhuangtai
      }
      ,{
	path: '/xiaoxihuifu',
        name: '消息回复',
        component: xiaoxihuifu
      }
      ,{
	path: '/tonggao',
        name: '通告',
        component: tonggao
      }
      ,{
	path: '/woyaobaoming',
        name: '我要报名',
        component: woyaobaoming
      }
      ,{
	path: '/xiaoxi',
        name: '消息',
        component: xiaoxi
      }
      ,{
	path: '/qianbao',
        name: '钱包',
        component: qianbao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
      ,{
	path: '/zhifuyongjin',
        name: '支付佣金',
        component: zhifuyongjin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
