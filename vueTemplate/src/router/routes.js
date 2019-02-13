
import Share from '@/views/share/index.vue'
import Video from '@/components/Video.vue'
import NotFound from '@/views/404/index.vue'

// 采用异步按需加载组件模式
// const Share = () => import('@/views/share/index.vue')
// const Video = () => import('@/components/Video.vue')
// const NotFound = () => import('@/views/404/index.vue')

const routes = [
  {
    path: '/',
    name: 'Share',
    meta: { keepAlive: true, title: '姿美汇' },
    component: Share
  },
  {
    path: '/video',
    name: 'Video',
    meta: { keepAlive: false, title: '' },
    component: Video
  },
  {
    path: '*',
    meta: { keepAlive: true, title: '404' },
    component: NotFound
  }
]

export default routes
