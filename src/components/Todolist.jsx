import React from "react";

export default function TodoList(props) {
  return (
    <div>
    <div className="container todolist">
      <h1>ToDo list</h1>
      <div class="input-group mb-3">
        {props.todoList.map((item, index) => (
            <div class="input-group-text">
                <input
                    onClick={
                      (e) =>props.Check(item)
                    } 
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                />{item}
            </div>
         ))}
        
      </div>
    </div>
    </div>
  );
}
