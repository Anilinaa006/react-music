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
