
import './App.css';
import ApiCalendar from './components/ApiCalendar';
import Nav from './components/Nav';
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="todo-app">
        <TodoList></TodoList>
      </div>
      <ApiCalendar></ApiCalendar>
    </div>
  );
}

export default App;
