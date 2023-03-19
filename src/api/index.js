import requests from './requests'
import mockRequests from './mockRequests'

export const requestCategory = () => {
  return requests({ method: 'get', url: '/product/getBaseCategoryList' })
}

export const requestBannerList = () => {
  return mockRequests({ url: '/banner', method: 'get' })
}
