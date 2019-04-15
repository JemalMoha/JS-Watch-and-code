/* eslint-disable no-undef */
// It should have a place to store todos
const todos = ['item 1', 'item 2', 'item 3'];

// It should have a way to display todos
console.log('My Todos: ', todos);

// It should have a way to add new todos
todos.push('Item 4');

// It should have a way to change a todo
todos[0] = 'Changed item';

// It should have a way to delete a todos
todos.splice(0, 1);
