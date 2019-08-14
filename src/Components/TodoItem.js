import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.todo}</li>
      </ul>
    );
  }
}
