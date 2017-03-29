Vue.component('message', {
  props: ['title', 'body'],
  template: `
    <article class="message" v-show="isActive">
      <div class="message-header">
        <p>{{title}}</p>
        <button class="delete" @click="hideMessage"></button>
        <button class="delete" @click="isActive = false"></button>
      </div>
      <div class="message-body">
        {{body}}
      </div>
    </article>
  `,
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    hideMessage () {
      this.isActive = false
    }
  }

})

new Vue({
  el: '#root'
})