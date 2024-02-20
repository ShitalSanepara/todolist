import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoListAddNewItem from './components/TodoListAddNewItem';
import TodoListCompletedItem from './components/TodoListCompletedItem';
import React,{useState} from 'react'


  export default function App() {

  const [myToDoList, setMyToDoList] = useState(["Go to Sobo center", "Hello shital"]);
  const [completedItem, setCompletedItem] = useState(["hi kajal", "guddi"]);

  function addNewToDo(item){
    // console.log(item);
    setMyToDoList([...myToDoList, item]);
  }

  

  function Check(item){
      const index = myToDoList.indexOf(item);
      if (index > -1) { // only splice array when item is found
        setMyToDoList(myToDoList.slice(0, index).concat(myToDoList.slice(index+1)));
      }
      setCompletedItem([...completedItem, item]);
      
  }
  function Uncheck(item){
    const index = completedItem.indexOf(item);
    if (index > -1) { // only splice array when item is found
      setCompletedItem(completedItem.slice(0, index).concat(completedItem.slice(index+1)));
    }
    setMyToDoList([...myToDoList, item]);
    
}
  

  // function markToDoCompleted(item){
  //   // console.log(item);
  //   // setCompletedItem([...myToDoList, item]);
  // }

  return (
    <div className="App">
      {/* <Navbar title="todo_list"/> */}
      <TodoListAddNewItem addNewToDo={addNewToDo} />
      <TodoList todoList={myToDoList} Check={Check}  />
      <TodoListCompletedItem completedItem={completedItem} Uncheck={Uncheck}/>
    </div>
   
  );
}


