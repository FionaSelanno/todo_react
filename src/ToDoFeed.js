// every components imported in this file
import React from 'react';
import $ from 'jquery';


class ToDoFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      todoItems: []
    };
}


  reloadTodos(event) {
    let projectId = this.props.projectId;
    let component = this;

    $.getJSON(`https://ancient-coast-90229.herokuapp.com/todos`, function(data) {
      console.log(data);

      component.setState({
        todoItems: data
      });


    });
  }
  renderToDoItem(item, index) {
   console.log(item);
   return (
     <h2><ToDoItem /></h2>
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
