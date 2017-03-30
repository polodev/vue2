Vue.component('coupon', {
  template: `
    <input type="text" @blur="localOnCouponApplied" />
  `,
  methods: {
    localOnCouponApplied () {
      this.$emit('applied')
    }
  }
})


new Vue({
  el: '#root',
  data: {
    modal: false,
    isCouponApplied: false
  },
  methods: {
    onCouponApplied() {
      this.isCouponApplied = true
    }
  }
})