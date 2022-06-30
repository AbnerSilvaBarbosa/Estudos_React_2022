const redux = require("@reduxjs/toolkit");
const thunk = require("redux-thunk").default;


const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const {incrementAction,decrementAction} = require("./actions/CounterActions")
const {listAddAction,listRemoveAction,loadAndAddItem} = require("./actions/ListActions")

const counterReducer = require("./reducers/CounterReducer.js")
const listReducer = require("./reducers/ListReducer.js")

const allReducers = combineReducers({
    counter: counterReducer,
    list: listReducer
})


const store = createStore(allReducers,applyMiddleware(thunk))


store.subscribe(() => {
    console.log(store.getState())
})



store.dispatch(incrementAction(5))
store.dispatch(listAddAction("Novo item 1"))
store.dispatch(loadAndAddItem())





// -----------------------------------------------------------------------------------------------------------------------------------------------


