import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getArtistList
} from '../service/recommend'

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
    dispatch(changeNewAlbumAction((res as any).albums))
  }
)
const rankingIds = [19723756, 3779629, 2884035] // 飙升榜 新歌榜 原创榜
// 异步action获取榜单详情数据
export const fetchPlayListDetailAction = createAsyncThunk(
  'playListDetail',
  async (_, { dispatch }) => {
    const promises: Promise<any>[] = []
    for (const item of rankingIds) {
      promises.push(getPlayListDetail(item))
      // switch (item) {
      //   case 19723756:
      //     dispatch(changeUpRankingAction((res as any).playlist))
      //     break
      //   case 3779629:
      //     dispatch(changeNewRankingAction((res as any).playlist))
      //     break
      //   case 2884035:
      //     dispatch(changeOriginalRankingAction((res as any).playlist))
      //     break
      //   default:
      // }
    }
    Promise.all(promises).then((res) => {
      const playLists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playLists))
    })
  }
)

// 异步action获取歌手数据
export const fetchArtistListAction = createAsyncThunk(
  'artistList',
  async (_, { dispatch }) => {
    const res = await getArtistList(5)
    console.log(res)
    dispatch(changeArtistListAction((res as any).artists))
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  rankings: any[]
  // upRanking: any
  // newRanking: any
  // originalRanking: any
  artistList: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: [],
  artistList: []
  // upRanking: {},
  // newRanking: {},
  // originalRanking: {}
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
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    }
  }
})
export default recommendSlice.reducer

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeArtistListAction
} = recommendSlice.actions
