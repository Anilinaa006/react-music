import { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return <div>这是mine</div>
}

export default memo(Mine)   
