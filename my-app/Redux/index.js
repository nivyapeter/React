const { createStore } = Redux;

const initState = {
    todos: [],
    posts: [],
}

function myreducer (state = initState,action) {

}
const store = createStore(myreducer);


const todoAction = { type: 'ADD_TODO', todo: ' buy milk'};
store.Dispatch(todoAction)