import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/lib/carousel'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // 从store中获取banner数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  // 定义carousel实例
  // 不用加任何 import！
  const bannerRef = useRef<CarouselRef>(null)

  // 事件处理函数
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  //获取背景图片
  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerRef}
            effect="fade"
            afterChange={handleAfterChange}
          >
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
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
