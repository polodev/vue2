Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active ': tab.isActive }" @click="_selectTab(tab)">
            <a :href="tab.href">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tab-details">
        <slot></slot>
      </div>
    </div>
  `,
  data () {
    return {
      tabs: []
    }
  },
  props: {
  },
  mounted () {
    this.tabs = this.$children
  },
  methods: {
    _selectTab(selectTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectTab.name)
      })
    }
  },

})

Vue.component('tab', {
  template: `
    <div v-show="isActive">
      <slot></slot>
    </div>
  `,
  props: {
    name: {required: true},
    selected: {default: false}
  },
  data () {
    return {
      isActive : this.selected,
    }
  },
  computed: {
    href () {
      return "#" + this.name.toLowerCase().replace(/ /, "-");
    }
  }
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