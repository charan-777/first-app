import React from "react";
function Todos() {
    var [todo, setTodo] = React.useState(["asd", "ret"])
    function add() {
     var temp=document.getElementById("inp").value
      setTodo([...todo,temp])
    }
    return (
        <div className="main">
            
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            AddTodo
            </button>
            <ul>
            {
                todo.map((a) => {
                    return <li>{a}</li>
                })
            }
            </ul>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input type="text" name="input" id="inp"/>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={add}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Todos