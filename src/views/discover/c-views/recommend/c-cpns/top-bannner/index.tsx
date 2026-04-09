import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

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
    <div>
      {banners.map((item) => {
        return (
          <div key={item.imageUrl}>
            <img src={item.imageUrl} alt={item.title} />
          </div>
        )
      })}
    </div>
  )
}

export default memo(TopBanner)
