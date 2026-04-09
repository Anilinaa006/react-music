import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 定义一个自定义的 useSelector 函数，用于在组件中使用
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

// 定义一个自定义的 useDispatch 函数，用于在组件中使用
export const useAppDispatch: () => DispatchType = useDispatch

export const shallowEqualApp = shallowEqual

export default store
