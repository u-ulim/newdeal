// js/ToDoItem.js
export default class ToDoItem {
  constructor(toDo, onToggle, onDelete) {
    this.toDo = toDo;
    this.onToggle = onToggle;
    this.onDelete = onDelete;
    this.element = this.createElement();
  }

  createElement() {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.setAttribute('data-id', this.toDo.id);

    if (this.toDo.completed) {
      li.classList.add('completed');
    }

    const span = document.createElement('span');
    span.innerText = this.toDo.text;

    const buttonGroup = document.createElement('div');
    const checkBtn = document.createElement('button');
    checkBtn.innerText = '✔';
    checkBtn.addEventListener('click', () => this.onToggle(this.toDo.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '✖';
    deleteBtn.addEventListener('click', () => this.onDelete(this.toDo.id));

    buttonGroup.appendChild(checkBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonGroup);

    return li;
  }
}
