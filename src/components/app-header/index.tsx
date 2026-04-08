import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header-titles.json'
import { NavLink } from 'react-router-dom'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    }
    return (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    )
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => (
              <div className="item" key={item.title}>
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
