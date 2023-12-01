import { ADDTODO, DEC, INC } from "./actionType"
export function addTodo(todos){
    return{type:ADDTODO,payload:todos}
}
export function incCount(){
    return{type:INC}
}
export function decCount(){
    return{type:DEC}
}