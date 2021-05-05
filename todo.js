const itemKey = 'vueTodo'

var app1 = new Vue({
  el: '#app',
  data: {
    newTodoText: '', // これ要るか？
    todos: {}, // (Ex) { "j6fdcq68": { "body": "Buy milk", "editing": true } }
  },
  created: function() {
    if (localStorage.getItem(itemKey) !== null) {
      this.todos = JSON.parse(localStorage.getItem(itemKey))
    }
  },
  methods: {
    addNewTodo: function() {
      if (!this.newTodoText) { return; }

      let key = Math.random().toString(36).slice(-8)
      this.todos[key] = { body: this.newTodoText, editing: false }
      this.newTodoText = ''

      localStorage.setItem(itemKey, JSON.stringify(this.todos))
    },
    edit: function(key) {
      this.todos[key].editing = true
    },
    update: function(e) {
      let el = e.target.elements
      this.$set(this.todos, el.key.value, { body: el.body.value, editing: false })
      localStorage.setItem(itemKey, JSON.stringify(this.todos)) // TODO: 共通化
    }
  }
})
