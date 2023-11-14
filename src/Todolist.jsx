import React from "react";
function Todos() {
    var [todo, setTodo] = React.useState(["promotions", "react assignments", "campaign", 'ppts'])
    function remove(b) {
        var temp = ([...todo])
        temp.splice(b, 1)
        setTodo([...temp])
    }
    return (
        <div className="main">
            <h1>Todolist</h1>
            <div>
            {
                todo.map((a, i) => {
                    return <li>{a} <button onClick={() => { remove() }}>Delete</button></li>
                })
            }
            </div>
        </div>
    )
}
export default Todos