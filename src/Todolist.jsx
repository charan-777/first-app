import React, { useCallback } from "react";
import Todo from "./Todo";
function Todolist() {
    var [todos, setTodos] = React.useState([
        {
            title: "Get villa",
            status: false
        },
        {
            title: "Get bmw",
            status: false
        },
        {
            title: "Get veges",
            status: true
        },
        {
            title: "Get bicycle",
            status: false
        },
        {
            title: "Get playstation",
            status: true
        }
    ])
    var [sorting, setSorting] = React.useState("all")

    
    var del = useCallback((i) => {
        var temp = ([...todos])
        temp.splice(i, 1)
        setTodos([...temp])
    }, [todos])

    function donetodo(i) {
        var temp = ([...todos])
        temp[i].status = true
        setTodos([...temp])
    }
    function undotodo(i) {
        var temp = ([...todos])
        temp[i].status = false
        setTodos([...temp])
    }
    function sortAll(e) { setSorting("all"); }
    function sortCompleted(e) { setSorting("completed"); }
    function sortNotcompleted(e) { setSorting("notcompleted"); }

    var filterlist = todos.filter((todo) => {
        if (sorting === "all") {
            return true;
        }
        else if (sorting === "completed") {
            return todo.status;
        }
        else if (sorting === "notcompleted") {
            return !todo.status;
        }
        return filterlist;
    })
   
    var add = React.useCallback(function () {
        var addTodo = document.getElementById("d1").value
        if (addTodo !== "") {
            var temp = ([...todos]);
            temp.push({ title: addTodo + " ", status: false });
            setTodos([...temp]);
            document.getElementById("d1").value = "";
        }
    }, [todos]);


    return (
        <div className="mybox">
            <h2> child Todolist</h2>
            <input type="radio" value="all" name="radio" onClick={sortAll} />:ALL&nbsp;&nbsp;&nbsp;
            <input type="radio" value="completed" name="radio" onClick={sortCompleted} />:COMPLETED&nbsp;&nbsp;&nbsp;
            <input type="radio" value="notcompleted" name="radio" onClick={sortNotcompleted} />:NOTCOMPLETED&nbsp;&nbsp;&nbsp;
            <br />
            <input id="d1" type="text" />
            <button onClick={() => { add() }}>AddTodo</button>
            {
                filterlist.map((todo, i) => {
                    return (<Todo t={todo} f={del} idx={i} key={i} done={() => { donetodo(i) }} undo={() => { undotodo(i) }}></Todo>)
                })
            }
        </div>

    )
}
export default React.memo(Todolist)