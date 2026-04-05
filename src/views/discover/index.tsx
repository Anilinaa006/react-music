import { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return <div>这是discover</div>
}

export default memo(Discover)

