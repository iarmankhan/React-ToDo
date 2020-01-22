import React from 'react';
import Todos from "./components/Todos";

import './App.css';
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: uuid.v4(),
                    title: 'Take out trash',
                    completed: false
                },
                {
                    id: uuid.v4(),
                    title: 'Dinner',
                    completed: true
                },
                {
                    id: uuid.v4(),
                    title: 'Meeting',
                    completed: false
                },
            ]
        }
    }


    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    };

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
      this.setState({ todos: [...this.state.todos, newTodo]})
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos markComplete={this.markComplete} delTodo={this.delTodo} todos={this.state.todos}/>
                </div>
            </div>
        )
    }
}

export default App;
