import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import RankingItem from '../top-ranking-item'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => (
          <RankingItem key={item.id} itemData={item} />
        ))}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
