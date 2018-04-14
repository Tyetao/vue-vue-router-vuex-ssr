<docs>
## This is an Example component.
</docs>

<template>
  <header :class="$style.mainHeader">
    <!-- <h1>JTodo</h1> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
  </header>
</template>

<style lang="stylus" module>
.main-header{
  text-align center
  h1{
    font-size 100px
    color: rgba(175, 47, 47, 0.4)
    font-weight 100
    margin 20px
  }
}
</style>
