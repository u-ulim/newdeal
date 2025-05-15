import ToDoList from './ToDoList.js';

export default class ToDoApp {
  constructor() {
    this.toDos = JSON.parse(localStorage.getItem('toDos')) || [];
    this.toDoForm = document.querySelector('#todo-form');
    this.toDoInput = this.toDoForm.querySelector('input');
    this.removeAllBtn = document.querySelector('.remove-all a');

    this.toDoList = new ToDoList(
      this.toDos,
      // bind()는 기존 함수를 복제하여 새로운 함수를 생성합니다. 
      // 이 새 함수는 호출될 때 지정된 객체를 this로 사용하며, 
      // 선택적으로 초기 인수를 설정할 수 있습니다. 
      // 이는 특히 콜백 함수나 이벤트 핸들러에서 유용합니다
      this.toggleComplete.bind(this),
      this.deleteToDo.bind(this)
    );

    this.toDoForm.addEventListener('submit', this.handleSubmit.bind(this));
    this.removeAllBtn.addEventListener('click', this.removeAll.bind(this));
  }

  saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(this.toDos));
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = this.toDoInput.value.trim();
    if (text === '') return;

    const newToDo = {
      text,
      id: Date.now(),
      completed: false,
    };

    this.toDos.push(newToDo);
    this.toDoInput.value = '';
    this.saveToDos();
    this.toDoList.update(this.toDos);
  }

  toggleComplete(id) {
    this.toDos = this.toDos.map(toDo =>
      toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
    );
    this.saveToDos();
    this.toDoList.update(this.toDos);
  }

  deleteToDo(id) {
    this.toDos = this.toDos.filter(toDo => toDo.id !== id);
    this.saveToDos();
    this.toDoList.update(this.toDos);
  }

  removeAll(event) {
    event.preventDefault();
    this.toDos = [];
    localStorage.removeItem('toDos');
    this.toDoList.update(this.toDos);
  }
}
