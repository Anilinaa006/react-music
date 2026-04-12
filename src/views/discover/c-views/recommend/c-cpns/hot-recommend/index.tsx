import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector((state) => ({
    hotRecommend: state.recommend.hotRecommend
  }))

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => (
          <SongMenuItem key={item.id} itemData={item}>
            {item.name}
          </SongMenuItem>
        ))}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
