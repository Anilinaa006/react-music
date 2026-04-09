import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<div>加载中...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
