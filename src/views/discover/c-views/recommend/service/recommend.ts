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
