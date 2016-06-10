import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { getTodos } from '../actions';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return (
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default connect()(App);

