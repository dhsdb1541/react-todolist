import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      // input: '',
      todos: []

      // name : '',
      // age : '',
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:9000/todos/alltodos').then(res => {
      this.setState({ todos: res.data });
      console.log(res.data);
      // console.log(res, this.state.todos[0]._id);
    });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value
    });
    console.log(value);
    console.log(this.state.todos);
  };

  handleClick = e => {
    Axios.post('http://localhost:9000/todos/addtodo', { todo: this.state.value });
  };

  handleRemove = e => {
    Axios.delete(`http://localhost:9000/todos/deletetodo/`, {
      data: {
        // _id: this.state.todos.map(_id => _id)
        _id: e.target.id
      }
    });
    window.location.reload();
    console.log(e.target.id);
  };

  render() {
    return (
      <div className="App">
        <h1 className="todo-title">Todo-List</h1>
        <form className="form-wrapper">
          <input className="form-input" name="todoa" onChange={this.handleChange} placeholder="할일을 작성하세요" />
          <button className="form-button" onClick={this.handleClick}>
            제출하기
          </button>
        </form>
        <ul className="todo-wrapper">
          {this.state.todos.map(item => (
            <li className="todo-list" key={item._id}>
              {item.todo}
              <button id={item._id} onClick={this.handleRemove}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
