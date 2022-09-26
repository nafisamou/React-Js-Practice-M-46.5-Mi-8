import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <ShowTodos></ShowTodos>
    </div>
  );
}

function ShowTodos() {
  const [Todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div className="showTodo">
      <h2>Todos: {Todos.length}</h2>
      {Todos.map((todo) => (
        <Todo
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
          key={todo.id}
        ></Todo>
      ))}
    </div>
  );
}

const Todo = (props) => {
  const { id, title, completed } = props;
  return (
    <div className="todo">
      <p><strong>id: </strong> {id}</p>
      <p><strong>title :</strong> {title}</p>
      <h4>completed: {completed?'true':'false'}</h4>
    </div>
  );
};



const Mobile= () => {
  const [Down, setDown] = useState(100);
  const batteryDown = ()=> {
    if((Down <= 100) && (Down >= 10)){
     setDown(Down - 10);
    }
    else{
      setDown(100);
    }
  }
  return (
    <div className="battery">
      <h3 style={{border:'3px solid pink', backgroundColor: 'pink', margin: '10px 10px 20px 2px', padding: '10px 0px 10px 2px', borderRadius : '20px', boxShadow:'6px 2px 8px gray',width: '50%', textAlign: 'center', fontWeight: 'bolder'}}>My Phone Battery State :</h3>
      <p style={{fontSize : '26px'}}><strong>Battary State :</strong> {Down}%</p>
      <button className="btn btn-primary" onClick={batteryDown}>Battery Down</button>
    </div>
  );
};


export default App;
