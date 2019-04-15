/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// It should store the todos array on an object
const todos = ['item 1', 'item 2', 'item 3'];
const todoList = {
  todos,
  displayTodos() {
    console.log('My Todos: ', this.todos);
  },
  addTodo(newValue) {
    this.todos.push(newValue);
    this.displayTodos();
  },
  changeTodo(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
};
