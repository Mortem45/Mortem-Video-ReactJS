import { createStore } from 'redux';


let $form = document.getElementById('form')
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData($form)
  let title = data.get('title')
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title,
    }
  })
}

const initialState = [
  {
    "title": "duele"
  },
  {
    "title": "One more time"
  },
  {
    "title": "sin ti"
  }
]
const reducer = function (state, action) {
    switch (action.type) {
      case 'ADD_SONG':
        return [...state, action.payload]

      default:
        return state
    }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render() {
  const container = document.getElementById('playlist')
  let playlist = store.getState()
  container.innerHTML = ''
  playlist.forEach(item => {
    let template = document.createElement('p')
    template.textContent = item.title
    container.appendChild(template)
  })
}
render()

function handleChange() {
  render()
}
store.subscribe(handleChange)