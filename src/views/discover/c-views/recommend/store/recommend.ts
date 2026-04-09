import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

// 异步action获取banner数据
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(changeBannersAction((res as any).banners))
  }
)

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})
export default recommendSlice.reducer

export const { changeBannersAction } = recommendSlice.actions
