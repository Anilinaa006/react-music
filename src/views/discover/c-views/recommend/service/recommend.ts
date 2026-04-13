import api from '@/service/api'
export const getBanners = () => {
  return api.get('/banner')
}

export const getHotRecommend = (limit = 30) => {
  return api.get('/personalized', {
    params: {
      limit
    }
  })
}
// 新碟上架
export const getNewAlbum = () => {
  return api.get('/album/newest')
}
// 榜单
// 飙升榜：19723756 新歌榜：3779629  原创榜：2884035

export const getPlayListDetail = (id: number) => {
  return api.get('/playlist/detail', {
    params: {
      id
    }
  })
}

// 歌手
export const getArtistList = (limit = 30) => {
  return api.get('/artist/list', {
    params: {
      limit
    }
  })
}
