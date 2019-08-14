import React, { Component } from 'react';
import axios from 'axios';
import { addTodo } from '../util/TodoAPI';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // state = {
  //   todo: []
  // };
  // handleChange = e => {
  //   this.setState({
  //     todo: e.target.value
  //   });
  //   console.log(e.target.value);
  // };
  // handleSubmit = e => {
  //   e.preventDefault();
  //   // const url = 'http://localhost:9000/todos/addtodo';
  //   addTodo();
  // };
  render() {
    // const todoItems =
    const { todo } = this.props;
    return (
      <div>
        {this.state.todo.map(({ todo }) => (
          <TodoItem todo={todo} />
        ))}
      </div>
    );
  }
}
