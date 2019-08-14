// import React, { Component } from 'react';
// import axios from 'axios';
// import TodoList from './Components/TodoList';

// export default class componentName extends Component {
//   state = {
//     todos: []
//   };
//   componentDidMount() {
//     axios.get('http://localhost:9000/todos/alltodos').then(res => {
//       console.log(res.data);
//       this.setState({ todos: res.data });
//     });
//   }

//   render() {
//     // console.log(userId);
//     return (
//       <div key="hello">
//         {/* {this.state.persons.map(c => (
//           <>
//             <li>{c._id}</li>
//             <li>{c.todo}</li>
//           </>
//         ))} */}
//         <TodoList todo={this.state.todo} />
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import Axios from 'axios';
// import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
      todos: []
      // name : '',
      // age : '',
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:9000/todos/alltodos').then(res => {
      console.log(res.data);
      this.setState({ todos: res.data });
      console.log(this.state.todos);
    });
  }
  // componentDidMount() {
  //   this.getUser();
  // }

  // getUser = () => {
  //   fetch('/users')
  //   .then(res => res.json())
  //   .then(users => this.setState({ users }));
  // }

  handleChange = e => {
    const { name, value } = e.target;
    this.name = this.value;

    this.setState({
      value
    });
    console.log(e.target.value, value);
  };

  handleClick = e => {
    e.preventDefault();
    console.log(e.target.name);
    const { todos } = this.state;

    Axios.post('http://localhost:9000/todos/addtodo', { todo: this.state.value }).then(res => {
      console.log(res.data);
      console.log(res.data.length);
    });
  };
  // fetch('/users', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name,
  //     age,
  //   }),
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  // })
  // .then(res => this.getUser());

  // document.getElementById('name').value = "";
  // document.getElementById('age').value = "";
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <form>
          이름 : <input name="todoa" onChange={this.handleChange} />
          <br />
          {/* 나이 : <input name="age" onChange={this.handleChange} /> */}
          {/* <br /> */}
          <button onClick={this.handleClick}>등록</button>
        </form>
        {this.state.todos.map(user => (
          <div key={user._id}>{user.todo}</div>
        ))}
      </div>
    );
  }
}

export default App;
