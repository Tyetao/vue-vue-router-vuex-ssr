import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted() {
    console.log(this.yeye, this.data)
  }
}

const CompOne = {
  name: 'CompOne',
  components: {
    ChildComponent
  },
  props: {
    text: {
      type: String
    }
  },
  template: `
    <div :style="style">
      <slot value="456"></slot>
      <child-component />
    </div>
  `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #ccc'
      },
      value: '123'
    }
  }
}

// const CompTwo = {
//   extend: CompOne,
//   data() {
//     return {
//       text: 3333
//     }
//   }
// }

// Vue.component('CompOne', component)

// new Vue({
//   el: '#root',
//   components: {
//     CompTwo
//   },
//   template: '<comp-two></comp-two>'
// })

// let Component = Vue.extend(CompOne)

// new Component({
//   el: '#root',
//   propsData: {
//     text: '22222222'
//   }
// })

new Vue({
  components: {
    CompOne
  },
  provide() {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data() {
    return {
      value: 123
    }
  },
  template: `
    <div>
      <input  v-model="value"/>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}}</span>
      </comp-one>
    </div>
  `,
  mounted() {
    console.log(this.$refs.comp, this.$refs.span)
  }
})
