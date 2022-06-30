
import './App.css';
import Nav from './components/Nav';
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="todo-app">
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
