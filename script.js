Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, adipisci!</p>
        </div>
      </div>
      <button @click="$emit('close')" class="modal-close"></button>
    </div>
  `
})

new Vue({
  el: '#root',
  data: {
    modal: false
  },
  methods: {
    showModal () {
      this.modal = true
    },
    hideModal () {
      this.modal = false
    }
  }
})