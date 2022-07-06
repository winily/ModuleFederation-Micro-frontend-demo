import { Tag } from 'element-ui'
import Vue from 'vue'

export default Vue.component("micro-tag", {
  props: {
    type: String,
    size: String
  },
  render (h) {
    return h(Tag, {
      props: { type: this.type, size: this.size }
    }, this.$slots.default)
  }
})