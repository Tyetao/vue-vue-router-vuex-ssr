import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0
  },
  template: '<div>{{text}}</div>'
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  // app.$data.text += 1
  // app.$options.data.text += 1 // 没有作用
}, 1000)

// 实例属性
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$parent)
// console.log(app.$root)
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// console.log(app.$attrs)
// console.log(app.$listeners)

// 实例方法/数据
// console.log(app.$watch)
// const unWatch = app.$watch('text', (newValue, oldValue) => {
//   console.log(`${newValue}:${oldValue}`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)
// console.log(app.$set)
// console.log(app.$delete)

// 实例方法/事件
// console.log(app.$on)
// console.log(app.$once)
// console.log(app.$off)
// console.log(app.$emit)

// 实例方法/生命周期
// console.log(app.$mount)
// console.log(app.$forceUpdate) // 强制组件重新渲染
// console.log(app.$nextTick)
// console.log(app.$destroy)

// console.log(app.$createElement)
// console.log(app.$ssrContext)
// console.log(app.$vnode)
