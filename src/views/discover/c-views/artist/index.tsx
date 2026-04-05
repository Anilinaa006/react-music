import { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return <div>这是artist</div>
}

export default memo(Artist)
