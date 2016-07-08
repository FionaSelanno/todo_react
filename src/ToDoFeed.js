// every components imported in this file
import React from 'react';
import $ from 'jquery';


class ToDoFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      todoItem: []
    };
}
  renderToDoItem(item, index) {
   console.log(item);
   return (
     <h2></h2>
   );
 }

  render() {
    let title = this.state.title;
    let todoItem = this.state.todoItems;

    return (
      <div>
        <h1>{title}</h1>

        <div>
          {todoItems.map(this.renderToDoItem.bind(this))}
        </div>
      </div>
    );
  }
}

export default ToDoFeed;
