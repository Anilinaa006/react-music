import api from '@/service/api'
export const getBanners = () => {
  return api.get('/banner')
}
