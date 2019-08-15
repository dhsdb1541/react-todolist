import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { info, onRemove } = this.props;
    return (
      <div key={info._id}>
        {info.todo}
        <button id={info._id} onRemove={onRemove}>
          x
        </button>
      </div>
    );
  }
}
