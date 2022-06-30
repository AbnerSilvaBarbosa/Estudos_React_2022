const fetch = require("node-fetch")
const { json } = require("stream/consumers");

const listAddAction = (item)=>{return {type:"ADD_ITEM" , payload:item}};
const listRemoveAction = (item)=>{return {type:"REMOVE_ITEM" , payload:item}};

const loadAndAddItem = ()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>res.json()).then(json =>{
            dispatch(listAddAction(json))
        })
    }

}

module.exports = {
    listAddAction,
    listRemoveAction,
    loadAndAddItem
}