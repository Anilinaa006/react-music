import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/lib/carousel'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  // 从store中获取新碟上架数据
  const { newAlbum } = useAppSelector((state) => ({
    newAlbum: state.recommend.newAlbum
  }))
  // 定义carousel实例
  const bannerRef = useRef<CarouselRef>(null)
  //事件处理函数
  const handlePrev = () => {
    bannerRef.current?.prev()
  }
  const handleNext = () => {
    bannerRef.current?.next()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={handlePrev}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => (
              <div key={item}>
                <div className="album-list">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => (
                    <NewAlbumItem key={album.id} itemData={album} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={handleNext}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
