// import * as Redux from 'redux';

// nodes
const input = document.getElementById('input')
const list = document.getElementById('list')
let todos = {
  0: {
    text: 'Ir al cine',
    done: false
  },
  1: {
    text: 'Cenar',
    done: true
  },
  2: {
    text: 'Grabar',
    done: false
  }
};

// functions
const drawTodos = () => {
  list.innerHTML = '';
  for (let key in todos) {
    const li = document.createElement('li');
    li.id = key;
    const classDone = todos[key].done ? 'done' : '';
    li.innerHTML = `
      <span class="${classDone}">${todos[key].text}</span>
      <span data-action="delete">X</span>
    `;
    setListener(li);
    list.appendChild(li);
  }
}

const setListener = li => {
  li.addEventListener('click', even => {
    const key = even.currentTarget.id;
    if (event.target.textContent == 'X') {
      delete todos[key]
    } else {
      obj = todos[key]
      obj = { text: obj.text, done: !obj.done }
      todos = {
        ...todos,
        [key]: obj
      };
    }
    drawTodos();
  });
};

// listeners
input.addEventListener('keydown', even => {
  if (even.key === 'Enter') {
    const text = event.target.value;
    const id = Object.keys(todos).length;
    todos[id] = { text, 'done': false };

    drawTodos()
  }
})

// init
drawTodos();
