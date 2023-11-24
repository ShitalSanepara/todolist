import React from 'react'

export default function Todolistaddnewitem() {
  return (
    <div className="container"> 
      <h2>Todo list addnew item</h2>
      <div className="e-float-input e-input-group">
            <input type="text" required={true}/>
            <span className="e-float-line"/>
            {/* <label className="e-float-text">Enter Name </label> */}
            <button type="button" class="btn">Add New</button>
        </div>
        
    </div>
  )
}
