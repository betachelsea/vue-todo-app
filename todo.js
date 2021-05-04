var app1 = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [], // (Ex) { key: 'j6fdcq68', body: 'todo body!' }
  },
  methods: {
    addNewTodo: function() {
      if (!this.newTodoText) { return; }

      this.todos.push({
        key: Math.random().toString(36).slice(-8),
        body: this.newTodoText,
      })
      this.newTodoText = ''
    }
  }
})
