import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  // 从store中获取banner数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay>
            {banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left'></button>
          <button className='btn right'></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
