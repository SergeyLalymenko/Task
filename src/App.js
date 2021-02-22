import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddForm from './components/AddForm/AddForm'



function App() {
  return (
    <div className="main">
      <AddForm/>
      <TodoList/>
    </div>
  );
}

export default App;