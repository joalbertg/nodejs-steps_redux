// import * as Redux from 'redux';

// nodes
const input = document.getElementById('input')
const list = document.getElementById('list')
const todos = {}

// functions
const drawTodos = () => {
  list.innerHTML = '';

  for (let key in todos) {
    const li = document.createElement('li');
    const id = key;
    li.innerHTML = `
      <span>${todos[key]}</span>
      <span id="${id}">X</span>
    `;
    list.appendChild(li);
  }
}

// listeners
input.addEventListener('keydown', even => {
  if (even.key === 'Enter') {
    const text = event.target.value;
    const id = Object.keys(todos).length;
    todos[id] = text

    drawTodos()
  }
})

