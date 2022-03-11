// const { createStore } = Redux;

// const initState = {
//     todos: [],
//     posts: [],
// }

// function myreducer (state = initState,action) {

// }
// const store = createStore(myreducer);


// const todoAction = { type: 'ADD_TODO', todo: ' buy milk'};
// store.Dispatch(todoAction)
import { createStore } from "redux";


function appReducer() {
    
}

const store = createStore(appReducer);
 const state = store.getState();
 console.log(state)