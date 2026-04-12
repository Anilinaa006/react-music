import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return (
    <RecommendWrapper>
      <AreaHeaderV1 />
      这是Hotrecommend
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
