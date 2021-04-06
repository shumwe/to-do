import React from "react";
import {Button, ButtonToolbar, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    {text: "Activity 1",
    isDone: false
  }

  ])
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
};
const markTodo = index => {
  const newTodos = [...todos]
  newTodos[index].isDone = true;
  setTodos(newTodos);
};
const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};
return(
  <div className="app">
    <div className="container">
      <div class="header-container">
      <h1 className="text-center mb-4 text-size">MY Todo List</h1>
      </div>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index)=>(
          <Card>
            <Card.Body>
              <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
function Todo({todo, index, markTodo, removeTodo}){
  return (
    <div
    className="todo"
    >
      <span style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>Completed</Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>Remove</Button>
      </div>
    </div>
  );
}
function FormTodo({addTodo}){
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b class="text-white">Add Activity</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new activity..."/>
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          ADD
        </Button>
    </Form>
  );
}
}

export default App;
