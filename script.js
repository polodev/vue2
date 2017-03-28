Vue.component('task-list', {
  template: `
    <div>
      <task v-for="task in tasks">{{task.name}}</task>
    </div>
  `,
  data () {
    return {
        tasks : [
        {name: 'Waking up', completed: true},
        {name: 'Brash teeth', completed: true},
        {name: 'take food', completed: true},
        {name: 'work for long time', completed: false},
        {name: 'do gym', completed: false},
        {name: 'do bath', completed: false},
      ]
    }
  }
})
Vue.component('task', {
  template: '<li><slot></slot></li>'
})
new Vue({
  el : '#root'
})