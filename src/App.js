import React from 'react';
import ToDoFeed from './ToDoFeed';

const feedUrl = "https://ancient-coast-90229.herokuapp.com/todos.json";

class App extends React.Component {
    render() {
        return (
          <ToDoFeed url={feedUrl} />
          // How to get feed from Heroku site?
        );
    }
}

export default App;
