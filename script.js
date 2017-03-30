//window.Event = new Vue();
// Event.$emit('applied')
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }
  fire(event, data) {
    this.vue.$emit(event, data);
  }
  listen(event, callback) {
    this.vue.$on(event, callback)
  }
}
Vue.component('coupon', {
  template: `
    <input type="text" @blur="localOnCouponApplied" />
  `,
  methods: {
    localOnCouponApplied () {
      Event.fire('applied')
    }
  }
})


new Vue({
  el: '#root',
  data: {
    modal: false,
    isCouponApplied: false
  },
  created () {
    Event.listen('applied', function() {
      alert('coupon handled');
    })
  }

})