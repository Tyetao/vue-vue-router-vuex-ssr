<template>
  <div v-if="isFolder">
    <node v-for="(item, index) in newData" :key="index" :data="item" :showName="showName" :selectItem="newSelect" :treeChange="treeChange" />
  </div>
</template>

<script>
  import Node from './Node.vue'
  // 转树形
  function listToTree(myId, pId, list) {
    function exists(list, parentId) {
      for (let i = 0; i < list.length; i++) {
        if (list[i][myId] === parentId) return true
      }
      return false
    }

    let nodes = []
    for (let i = 0; i < list.length; i++) {
      let row = list[i]
      if (!exists(list, row[pId])) {
        nodes.push(row)
      }
    }

    let toDo = []
    for (let i = 0; i < nodes.length; i++) {
      toDo.push(nodes[i])
    }
    while (toDo.length) {
      let node = toDo.shift()
      for (let i = 0; i < list.length; i++) {
        let row = list[i]
        if (row[pId] === node[myId]) {
          if (node.children) {
            node.children.push(row)
          } else {
            node.children = [row]
          }
          toDo.push(row)
        }
      }
    }
    return nodes
  }

  export default {
    name: 'RadioTree',
    data() {
      return {
        newData: [],
        newSelect: this.selectItem
      }
    },
    props: {
      // 显示的数据（必须是树形）
      data: {
        type: Array,
        default: () => [],
        required: true
      },
      // 节点展示的名字
      showName: {
        type: String,
        default: '',
        required: true
      },
      // 选中的json
      selectItem: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      // 从node组件返回的方法
      treeChange(data) {
        if (data()) {
          this.newSelect = data()
          this.recursive(this.data, data().id)
          this.$emit('change', data())
        } else {
          console.log('当前节点没有字段')
        }
      },
      // 遍历树形节点，如果数据的某个节点与选择的节点相同则设置当前节点的isChecked为true,否则全部设置为false
      recursive(items, id) {
        items.forEach((item) => {
          item.id === id ? item.isChecked = true : item.isChecked = false

          if (item.children && item.children.length > 0) {
            this.recursive(item.children, id)
          }
        })
      },
      // 判断是否为树形结构的数据
      isTree(data) {
        for (let i = 0; i < data.length; i++) {
          const obj = data[i]
          if (obj.children && obj.children.length > 0) {
            this.newData = this.data
            break
          } else {
            this.newData = listToTree('id', 'parentId', data)
            break
          }
        }
      }
    },
    created() {
      this.isTree(this.data)
    },
    computed: {
      isFolder() {
        return this.data && this.data.length > 0
      }
    },
    components: {
      Node
    }
  }
</script>
