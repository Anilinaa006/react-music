import Discover from '@/views/discover'
import type { RouteObject } from 'react-router-dom'
const router: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default router
