import React,{useState} from 'react'

export default function TodoListCompletedItem(props) {

 

  return (
    <div className="container completeditem">
      <h3>Completed Item</h3>
      <div class="input-group-text">
      {props.completedItem.map((item, index) => (
            <div class="input-group-text">
                <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    checked
                    aria-label="Checkbox for following text input"
                />{item}
            </div>
         ))}
         
        </div>
      
    </div>
  )
}
