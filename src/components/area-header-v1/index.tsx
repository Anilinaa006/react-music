import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'
import { Link } from 'react-router-dom'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
  title?: string
  keywords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeaderV1: FC<IProps> = (props) => {
  const {
    title = '热门推荐',
    keywords = [],
    moreText = '更多',
    moreLink = '/'
  } = props
  return (
    <div>
      <HeaderV1Wrapper className="sprite_02">
        <div className="left">
          <div className="title">{title}</div>
          <div className="keywords">
            {keywords.map((item) => (
              <div key={item} className="item">
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <Link className="more" to={moreLink}>
            {moreText}
          </Link>
          <i className="icon sprite_02"></i>
        </div>
      </HeaderV1Wrapper>
    </div>
  )
}

export default memo(AreaHeaderV1)
