<template>
  <transition
    name="fade"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <section
      :class="$style.notification"
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span :class="$style.content">{{content}}</span>
      <a
        href="javascript:;"
        :class="$style.btn"
        @click="handleClose($event)"
      >{{btn || '关闭'}}</a>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  computed: {
    style() {
      return {}
    }
  },
  methods: {
    handleClose(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {},
    clearTimer() {},
    createTimer() {}
  }
}
</script>

<style lang="stylus" module>
.notification
  display flex
  background-color #383830
  color rgba(255,255,255,1)
  align-items center
  padding 20px
  position fixed
  min-width 280px
  box-shadow 0 3px 5px -1px rgba(0,0,0,.5)
  flex-wrap wrap
  transition all .3s
  .content
    padding 0
  .btn
    color #ff4081
    padding-left 24px
    margin-left auto
    cursor pointer
</style>
