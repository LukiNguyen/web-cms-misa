export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as EmployeeDialog } from '../..\\components\\employee\\Dialog.vue'
export { default as EmployeeFilter } from '../..\\components\\employee\\Filter.vue'
export { default as EmployeeForm } from '../..\\components\\employee\\Form.vue'
export { default as EmployeeTable } from '../..\\components\\employee\\Table.vue'
export { default as SharedPagination } from '../..\\components\\shared\\Pagination.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
