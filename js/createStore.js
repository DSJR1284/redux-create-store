//Action -> Reducer -> New State.
//Closure Function
/* This feature is called a closure since a
function encloses or draws a protective bubble around the variables in its scope
and carries those with it when invoked later. */
function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { 
    dispatch, 
    getState
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer);
store.dispatch
({type:'@@INIT'});

// dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
