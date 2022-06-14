import React from 'react'
import Todos from './components/Todos'

class App extends React.Component {
      constructor(props) {
        super(props)
        // state you should have
    // todos
    // singleTodo
    // loading
    // loadingMessage = 'app is loading...' -> pass as props to loading component.
      const state = {
          todos: null,
          singleTodo: null,
          loading: true,
          loadingMessage: 'app is loading...'
        }

      }
  

  
  // Components
    // 1. Todos
    // 2. TodoItem
    // 3. SingleTodo (single highlighted todo)
    // 4. Loading Component
    // 5. Button component - FOR THE BACK BUTTON

  // Functionality
    // Ability to set a single todo (click event on a todo)
    // Back buttons should make single todo state null. 

      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((data) => this.setState({
          todos: data,
          loading: false
        }))
      }
  // 1. Use componentDidMount to make an api call to https://jsonplaceholder.typicode.com/todos/
  // 2. The app should show all todos in a list.
  // 3. Show a loading component while making api calls
  // 4. Show a single todo when it is clicked on.
  // 5. Have a back button that changes the singleTodo state back to null.


  // When clicking on a single todo, should make API call to https://jsonplaceholder.typicode.com/todos/ID, 
  // get the id from the event object that is created. 

  // If loading, render loading component with loading message passed in as props.

  // Conditionaly render Todos -> TodoItem or singleTodo

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>  
        <Todos todos = {todos}/>
      </div>
    );
  }
}

export default App;
