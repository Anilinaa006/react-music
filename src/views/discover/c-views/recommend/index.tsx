import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import axios from 'axios'

// 对类型进行约束
export interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/banner', {
        params: { type: 0 },
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data)
      })
  }, [])

  return <div>这是recommend</div>
}

export default memo(Recommend)
