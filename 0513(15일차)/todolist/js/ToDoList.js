// js/ToDoList.js
import ToDoItem from './ToDoItem.js';

export default class ToDoList {
  constructor(toDos, onToggle, onDelete) {
    this.toDos = toDos;
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.listElement = document.querySelector('.todo-list');
    this.render();
  }

  render() {
    this.listElement.innerHTML = '';
    this.toDos.forEach(toDo => {
      const item = new ToDoItem(toDo, this.onToggle, this.onDelete);
      this.listElement.appendChild(item.element);
    });
  }

  update(toDos) {
    this.toDos = toDos;
    this.render();
  }
}
