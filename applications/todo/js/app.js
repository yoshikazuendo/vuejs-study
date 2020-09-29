const app = new Vue({
  el: "#app",
  data: {
    appName: 'My Vue Todo',
    newTodoTitle: '',
    todos: [],
    filterStatus: 'All'
  },
  computed: {
    filteredTodos: function () {
      switch (this.filterStatus) {
        case 'Working':
          return this.todos.filter(todo => todo.isDone === false);
        case 'Completed':
          return this.todos.filter(todo => todo.isDone === true);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo: function (title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        isDone: false
      };

      this.todos.push(newTodo);
      this.newTodoTitle = '';
      this.saveTodoToStorage();
    },
    deleteCompletedTodo: function () {
      const remaingTodos = this.todos.filter(function (todo) {
        if (todo.isDone === false) return true;
      });
      this.todos = remaingTodos;
      this.saveTodoToStorage();
    },
    changeFilter: function (status) {
      this.filterStatus = status;
    },
    readTodoFromStorage: function () {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      if (!this.todos) {
        this.todos = [];
      }
    },
    saveTodoToStorage: function () {
      localStorage.clear();
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  mounted: function () {
    this.readTodoFromStorage();
  }
});
