import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchPlayListDetailAction,
  fetchArtistListAction
} from './store/recommend'
import TopBanner from './c-cpns/top-bannner'
import {
  RecommendWrapper,
  RecommendSection,
  RecommendLeft,
  RecommendRight
} from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchPlayListDetailAction())
    dispatch(fetchArtistListAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
