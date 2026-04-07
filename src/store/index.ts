import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

const store = configureStore({
  reducer: {}
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

// 定义一个自定义的 useSelector 函数，用于在组件中使用
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
