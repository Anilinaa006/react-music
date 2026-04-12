import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV1Wrapper } from './style'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const AreaHeaderV1: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div>
      <HeaderV1Wrapper className="sprite_02">
        <div className="left">
          <div className="title">热门推荐</div>
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
          <a href="" className="more">
            更多
          </a>
          <i className="icon sprite_02"></i>
        </div>
      </HeaderV1Wrapper>
    </div>
  )
}

export default memo(AreaHeaderV1)
