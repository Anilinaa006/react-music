import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'

// 异步action获取banner数据
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction((res as any).banners))
  }
)
// 异步action获取热门推荐数据
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (_, { dispatch }) => {
    const res = await getHotRecommend(8)
    console.log(res)
    dispatch(changeHotRecommendAction((res as any).result))
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    }
  }
})
export default recommendSlice.reducer

export const { changeBannersAction, changeHotRecommendAction } =
  recommendSlice.actions
