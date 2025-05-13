// 변수선언

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector(".todo-list");
const removeAll = document.querySelector(".remove-all button");

// localStorage에 저장할 키 값
const TODOS_KEY = "toDos";

// 할 일을 저장할 배열
let toDos = [];
let id = 0;

// localStorage에 데이터 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const delLi = e.target.parentElement.parentElement;
  delLi.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(delLi.id)); // ✅ 수정
  saveToDos();
}

function lineCheck(e) {
  const li = e.target.closest("li"); // ✅ 수정
  const id = parseInt(li.id);

  li.classList.toggle("lineThrough");
  // check 값을 true/false 토글 후 저장하기
  toDos = toDos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, check: !todo.check };
    }
    return todo;
  });
  saveToDos();
}

function RremoveAllList(e) {
  localStorage.clear();
  toDoList.innerHTML = "";
}

// 할 일 목록을 화면에 보여주기
function showToDo(newToDo) {
  // li목록 만들기
  const toDoLi = document.createElement("li");
  toDoLi.id = newToDo.id;

  const toDoSpan = document.createElement("span");
  toDoSpan.innerHTML = newToDo.text;

  // ✅ check true면 lineThrough 클래스 추가
  if (newToDo.check) {
    toDoLi.classList.add("lineThrough");
  }

  const toDoIcon = document.createElement("div");
  const toDoCheck = document.createElement("button");
  const toDoRemove = document.createElement("button");
  toDoIcon.appendChild(toDoCheck);
  toDoIcon.appendChild(toDoRemove);

  toDoLi.appendChild(toDoSpan);
  toDoLi.appendChild(toDoIcon);

  toDoList.appendChild(toDoLi);

  // 닫기 버튼을 누르면 목록에서 지워주기
  // localStorage에서도 변경하기
  toDoRemove.addEventListener("click", deleteToDo);
  toDoCheck.addEventListener("click", lineCheck);
  removeAll.addEventListener("click", RremoveAllList);
}

// 폼의 input에 글자를 입력하고 전송을 하면
// localStorage에 데이터 저장
// 입력한 글자, id, check 상태를 체크할 변수
todoForm.addEventListener("submit", (e) => {
  // 기본 이벤트 막기
  e.preventDefault();
  const newToDo = todoInput.value;

  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: ++id,
    check: false,
  };

  toDos.push(newToDoObj);
  saveToDos();
  showToDo(newToDoObj);
  console.log(toDos);
});

// const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(saveToDos);

// if (saveToDos !== null) {
//   const parsedTodos = JSON.parse.parse(saveToDos);
//   toDos = parsedTodos;
//   parsedTodos.forEach(showToDo);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  // ✅ 변수명 수정
  const parsedTodos = JSON.parse(savedToDos); // ✅ parse 수정
  toDos = parsedTodos;
  parsedTodos.forEach(showToDo);
}

console.log(toDos);
