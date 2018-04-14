import Vuex from 'vuex'

import state from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state,
    actions,
    mutations,
    getters
    // modules: {
    //   a: {
    //     // namespaced: true,
    //     state: {
    //       text: 'a'
    //     },
    //     mutations: {
    //       updateText(state, text) {
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus(state, getters, rootState) {
    //         return state.text + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add({ state, commit, rootState }) {
    //         commit('updateCount', { count: 122, time: 2000 }, { root: true })
    //       }
    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 'b'
    //     },
    //     mutations: {
    //       updateText(state, text) {
    //         state.text = text
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept(['./state/state', './mutations/mutations', './getters/getters', './actions/actions'], () => {
      // 获取更新后的模块
      // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
      const newMutations = require('./mutations/mutations').default
      const newState = require('./state/state').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default
      // 加载新模块
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
