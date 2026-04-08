import { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <div>
      <h2>我是footer</h2>
    </div>
  )
}

export default memo(AppFooter)
