import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

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
    dispatch(changeHotRecommendAction((res as any).result))
  }
)

// 获取新碟上架数据
export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (_, { dispatch }) => {
    const res = await getNewAlbum()
    console.log(res)
    dispatch(changeNewAlbumAction((res as any).albums))
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: []
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
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  }
})
export default recommendSlice.reducer

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction
} = recommendSlice.actions
