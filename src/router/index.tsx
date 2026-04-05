import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const DjRadio = lazy(() => import('@/views/discover/c-views/djradio'))

const Download = lazy(() => import('@/views/download'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <DjRadio />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default router
