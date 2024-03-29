import React, {useState} from 'react'

export default function TodoListAddNewItem(props) {

  const [addToDoTextboxValue, setAddToDoTextboxValue] = useState("");

  function onSubmitTodo(){
    props.addNewToDo(addToDoTextboxValue);
  }

  return (
    <div className="container addnewitem mb-3"> 
      <h3>Add New Item</h3>
      <div className="e-float-input e-input-group">
            <input type="text" required={true} value={addToDoTextboxValue} onChange={(e) => setAddToDoTextboxValue(e.target.value)}/>
            <span className="e-float-line"/>
            {/* <label className="e-float-text">Enter Name </label> */}
            <button onClick={onSubmitTodo}>Add</button>
        </div>
        
    </div>
  )
}
