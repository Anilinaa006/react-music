import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        aaaa
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
