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

  // function markToDoCompleted(item){
  //   // console.log(item);
  //   // setCompletedItem([...myToDoList, item]);
  // }

  return (
    <div className="App">
      {/* <Navbar title="todo_list"/> */}
      <TodoList todoList={myToDoList} />
      <TodoListAddNewItem addNewToDo={addNewToDo} />
      <TodoListCompletedItem completedItem={completedItem}/>
    </div>
   
  );
}


