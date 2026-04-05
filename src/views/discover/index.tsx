import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback={<div>加载中...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
