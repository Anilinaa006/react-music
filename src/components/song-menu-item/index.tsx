import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './style'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
  itemData?: any
}

const SongMenuItem: FC<IProps> = ({ itemData }) => {
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={itemData.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{itemData.playCount}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
