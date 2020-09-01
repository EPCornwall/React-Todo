import React from 'react';
import { v4 as uuid} from 'uuid'


import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const todoData = [
  {
    name: 'Make To do App',
    id: uuid(),
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



constructor(){
  super();
  this.state={
    todo: todoData,
    toggleDone: () => {},
  }
}

toggleDone = (clickedItemId) =>{
  this.setState({
    todo: this.state.todo.map((item) =>{
      if (item.id === clickedItemId){
        return{
          ...item,
          done: !item.done
        };
      } else{
        return item;
      }
    })
  });
};

addItem = (itemName) =>{
  const newItem = {
    name: itemName,
    id: uuid(),
    done: false
  };
  this.setState({
    todo: [...this.state.todo, newItem]
  })
}

clearDone = () =>{
  this.setState({
    todo: this.state.todo.filter(item => item.done === false )
  })
}

  render() {
    return (
      <div className="wrapper">
        <div >
        <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
          <TodoList 
           todo={this.state.todo}
          toggleDone={this.toggleDone}
          clearDone={this.clearDone} />
        </div>
      </div>
    );
  }
}

export default App;
