var input = document.querySelector('.header__input');
var addBtn = document.querySelector('.header__btn');
var todoList = document.querySelector('.todoList');

var todoListArr = [];

addBtn.onclick = function() {
  if(input.value) {
    addItem();
  }
}

function addItem() {
  var newItem = input.value;
  todoListArr.push(newItem);
  localStorage.setItem('todos', JSON.stringify(todoListArr));
  render();
  input.value = '';
} 

function removeItem(i) {
  todoListArr.splice([i], 1);
  var localArr = JSON.parse(localStorage.getItem('todos'));
    localArr.splice([i], 1);
  localStorage.setItem('todos', JSON.stringify(localArr));
  render();
}

function render(){

  if(localStorage.getItem('todos') !== null) {
    todoListArr = JSON.parse(localStorage.getItem('todos'));
  }

  var content = todoListArr.map( item => `
    <li class="todoList__item">
      <div class="todoList__item--content">${item}</div>
      <div class="todoList__item--delete" onclick="removeItem(${todoListArr.indexOf(item)})"><img src="./images/trash.png" alt=""></div>
    </li>
  `);
  todoList.innerHTML = content.join('');
}

render();