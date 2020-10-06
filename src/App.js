import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import  { v4 } from 'uuid';
import './App.css';

class App extends Component  {
  state = { 
    todos: [
      {
        id: v4(),
        title: 'Zaposlit se',
        completed: false
      },
      {
        id: v4(),
        title: 'Kupit laptop',
        completed: false
      },
      {
        id: v4(),
        title: 'Bacit smece',
        completed: false
      }
    ]
  }
 
  // Toggle 'completed' 
  markComplete = id => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo; 
    })})
  }

  // Delete todo
  delTodo = id => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  
  // Add todo
  addTodo = title => {
    const newTodo = { 
      id: v4(),
      title,  
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>  
      </div>
    );
  }
}

export default App;
