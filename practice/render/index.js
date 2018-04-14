import Vue from 'vue'

const CompOne = {
  props: ['props1'],
  name: 'CompOne',
  // template: `
  //   <div :style="style">
  //     <slot value="456"></slot>
  //   </div>
  // `,
  render(createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => { this.$emit('click') }
      }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
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

new Vue({
  components: {
    CompOne
  },
  el: '#root',
  data() {
    return {
      value: 123
    }
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp">
  //       <span slot-scope="props" ref="span">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render(createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      on: {
        click: this.handleClick
      }
      // nativeOn: {
      //   click: this.handleClick
      // }
    }, [
      createElement('span', {
        ref: 'span',
        slot: 'header',
        attrs: {
          id: '22'
        },
        domProps: {
          innerHTML: '<span>345</span>'
        }
      }, this.value)
    ])
  },
  mounted() {
    console.log(this.$refs.comp, this.$refs.span)
  }
})
