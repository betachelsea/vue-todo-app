const itemKey = 'vueTodo'

var app = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: {}, // (Ex) { "j6fdcq68": { "body": "Buy milk", "editing": true } }
  },
  created: function() {
    if (localStorage.getItem(itemKey) !== null) {
      this.todos = JSON.parse(localStorage.getItem(itemKey))
    }
  },
  methods: {
    create: function() {
      if (!this.newTodoText) { return; }

      let key = Math.random().toString(36).slice(-8)
      this.upsertTodo(key, this.newTodoText)
      this.newTodoText = ''
    },
    edit: function(key) {
      this.todos[key].editing = true
    },
    update: function(e) {
      let el = e.target.elements
      this.upsertTodo(el.key.value, el.body.value)
    },
    upsertTodo: function(key, body) {
      this.$set(this.todos, key, { body: body, editing: false })
      localStorage.setItem(itemKey, JSON.stringify(this.todos))
    }
  }
})
