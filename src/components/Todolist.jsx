import React from "react";

export default function TodoList(props) {
  return (
    <div>
    <div className="container todolist">
      <h3>ToDo list</h3>
      <div class="input-group mb-3">
        {props.todoList.map((item, index) => (
            <div class="input-group-text">
                <input
                    onClick={
                      (event) => {
                        props.Check(item)
                        event.preventDefault();
                      }
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
