import { requestCategory, requestBannerList } from '@/api'

let state = {
  category: [],
  bannerList: [],
}

let mutations = {
  GETCATEGORY(state, category) {
    state.category = category
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
}

let actions = {
  async getCategory({ commit, state, dispatch }) {
    let result = await requestCategory()
    if (result.code == 200) {
      //提交mutation存储服务器数据
      commit('GETCATEGORY', result.data)
    }
  },
  async getBannerList({ commit, state, dispatch }) {
    let result = await requestBannerList()
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
