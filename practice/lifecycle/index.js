import Vue from 'vue'

const app = new Vue({
  template: '<div>{{text}}</div>',
  data: {
    text: 1
  },
  beforeCreate() {
    console.log(this.$el, 'beforeCreate')
  },
  created() {
    console.log(this.$el, 'created')
  },
  beforeMount() {
    console.log(this.$el, 'beforeMount')
  },
  mounted() {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
  // render(h) {
  //   throw new TypeError('render error')
  // },
  // renderError() {
  //   return h('div', {}, 'new render function')
  // },
  // errorCaptured() {
  //   // 向上冒泡，并且正式环境可以使用
  // }
})

app.$mount('#root')
