<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <button @click="notify">notify</button>
    <radio-tree
      :data="data"
      :showName="showName"
      :selectItem="selectItem"
      @change="treeChange"
    />
  </div>
</template>

<script>
  import Header from './layout/header.vue'
  import Footer from './layout/footer.jsx'
  import Todo from './views/todo/todo.vue'
  import {
    mapState,
    mapActions
  } from 'vuex'
  import depa from './assets/jsons/depa.json'

  // // console.log(Header.__docs)
  export default {
    data() {
      return {
        data: depa,
        showName: 'departmentName',
        selectItem: {
          id: 168,
          departmentName: '采购部'
        }
      }
    },
    metaInfo: {
      title: 'tanyetao'
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['updateCountAsync']),
      notify() {
        this.$notify({
          content: 'test $notify',
          btn: 'close',
          autoClose: 1000
        })
      },
      treeChange(data) {
        console.log(data)
      },
      changed(checked) {
        this.checked = checked.map((c) => {
          return c.label
        }).join(', ')
      }
    },
    mounted() {
      // this.updateCountAsync({
      //   count: 5,
      //   time: 2000
      // })
    },
    components: {
      Header,
      Footer,
      Todo
    }
  }
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  // background-color #999
  opacity .9
  z-index -1
}
</style>


