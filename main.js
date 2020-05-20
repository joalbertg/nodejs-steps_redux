// import * as Redux from 'redux';
import { createStore } from 'redux';

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
  //actualizar los todos antes de dibujar
  todos = store.getState();
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
      let obj = todos[key]
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
    const todo = { text, done: false };
    store.dispatch({
      type: "ADD_TODO",
      todo
    });
  }
});

// redux

// reducer
const todosReducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const key = Object.keys(state).length
      action.todo['id'] = key
      return { ...state, [key]: action.todo }
      break;
    case 'UPDATE_TODO':
      return { ...state, [action.todo.id]: action.todo }
      break;
    case 'DELETE_TODO':
      delete state[action.todo.id];
      return { ...state }
      break;
    default:
      return state;
  }
};

// store
const store = createStore(todosReducer, {
  0: {
    id: 0,
    text: 'Ir al cine',
    done: false
  }
 });

store.subscribe(drawTodos);

// init
drawTodos();

