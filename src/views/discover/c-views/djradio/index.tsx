import { memo } from 'react'
import type { FC, ReactNode } from 'react'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const DjRadio: FC<IProps> = () => {
  return <div>这是djradio</div>
}

export default memo(DjRadio)
