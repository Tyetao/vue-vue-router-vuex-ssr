<template>
  <div class="node" :pId="id">
    <div class="node-header">
      <input type="radio" name="radio" :checked="data.id === selectItem.id" @change="radioChange($event,data)">
      <div :class="['node-header-right',data.id === selectItem.id ? 'current' : '']" @click="handleShowBody(data.children)">
        <i v-if="isChildren" :class="['arrow', arrowDirection ? 'up' : 'bottom']"></i>
        <span :class="[!isChildren ? 'left' : '']">{{ data[showName] }}</span>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-show="open" v-if="isChildren" class="node-body">
        <node v-for="(item, index) in data.children" :key="index" :data="item" :showName="showName" :selectItem="selectItem" :treeChange="treeChange" />
      </div>
    </transition>
  </div>
</template>

<script>
  let id = 0
  export default {
    name: 'Node',
    data() {
      return {
        id: 'tree-node-' + (++id),
        open: false,
        arrowDirection: true
      }
    },
    props: {
      data: {
        type: Object,
        default: () => {}
      },
      treeChange: {
        type: Function,
        default: () => {}
      },
      showName: {
        type: String,
        default: '',
        required: true
      },
      selectItem: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      // 判断点击的当前节点是否有子节点，改变箭头的方向和显示隐藏子菜单
      handleShowBody(children) {
        if (children && children.length > 0) {
          this.arrowDirection = !this.arrowDirection
          this.open = !this.open
        }
      },
      // 当radio值改变触发，返回改变的值
      radioChange(evt, data) {
        data.isChecked = true
        if (data.isChecked) {
          this.treeChange(() => {
            return data
          })
        }
      }
    },
    computed: {
      isChildren() {
        return this.data.children && this.data.children.length > 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
.node {
  position: relative;
  &:before {
    position: absolute;
    left: 6px;
    top: 0px;
    bottom: 0px;
    width: 1px;
    background-color: #ddd;
    content: " ";
  }
  &:last-child:before {
    bottom: 12px;
  }
  &:first-child:before {
    top: 12px;
  }
  &:after {
    position: absolute;
    left: -13px;
    top: 13px;
    width: 13px;
    background-color: #ddd;
    height: 1px;
    content: " ";
  }
}
.node-header {
  position: relative;
  line-height: 26px;

  input {
    width: 14px;
    height: 14px;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }

  .node-header-right {
    display: inline-block;
    cursor: pointer;

    span {
      margin-left: 16px;
    }
    .left {
      margin-left: 0;
    }
    &:hover {
      color: #a3e2e2;
    }
    &.current{
      color: #a3e2e2;
    }
  }
}

/* body */
.node-body {
  margin-left: 20px;
  transition: all 0.35s ease-in-out;
}

/* 三角形 */
.arrow {
  position: absolute;
  left: 20px;
  display: block;
  height: 0;
  width: 0;
  top: 50%;
  margin-top: -2px;
  border: 6px solid transparent;
  transition: all 0.35s ease-in-out;
  transform-origin: 40% 20% 0px;

  &.up {
    transform: rotate(180deg);
    left: 20px;
  }

  &.bottom {
    transform: rotate(0deg);
    left: 18px;
  }

  &:after {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    margin-top: -6px;
    display: block;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    border-top-color: #999;
  }
}

/* 过渡 */
.slide-fade-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-leave-active {
  transition: all .3s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>


