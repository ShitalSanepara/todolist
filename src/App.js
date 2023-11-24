import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import Todolistaddnewitem from './components/Todolistaddnewitem';
import Todolistcompleteditem from './components/Todolistcompleteditem';

function App() {
  return (
    <div className="App">
      <Navbar title="todo_list"/>
      <Todolist/>
      <Todolistaddnewitem/>
      <Todolistcompleteditem/>
    </div>
   
  );
}

export default App;
