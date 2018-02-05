import Vue from 'vue'
import Router from 'vue-router'
import tupian from '@/components/tupian/tupian'
import tianqi from '@/components/tianqi/tianqi'
import chengshi from '@/components/tianqi/chengshi'
import duanzi from '@/components/duanzi/duanzi'
import dianying from '@/components/move/move'
import xiangqing from '@/components/move/xiangqing'
import gengduo from '@/components/move/gengduo'
import yingping from '@/components/move/yingping'
import juzhao from '@/components/move/juzhao'
import yingren from '@/components/move/yingren'
import wenzhang from '@/components/wenzhang/wenzhang'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tupian',
      component: tupian
    },
    
     {
      path: '/tianqi',
      name: 'tianqi',
      component: tianqi
    },
    {
      path: '/chengshi',
      name: 'chengshi',
      component: chengshi
    },
    {
      path: '/duanzi',
      name: 'duanzi',
      component: duanzi
    },
    {
      path: '/move',
      name: 'move',
      component: dianying
    },
     {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
     {
      path: '/gengduo',
      name: 'gengduo',
      component: gengduo
    },
    {
      path: '/yingping',
      name: 'yingping',
      component: yingping
    },
    {
      path: '/juzhao',
      name: 'juzhao',
      component: juzhao
    },
    {
      path: '/yingren',
      name: 'yingren',
      component: yingren
    },
    {
      path: '/wenzhang',
      name: 'wenzhang',
      component: wenzhang
    },


  ]
})
