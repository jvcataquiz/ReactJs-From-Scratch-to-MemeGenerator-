import React from 'react';
import './App.css';
import Todo from './components/Todo';
const titlestyle = {
  textAlign: "center"
}
const App = () => {
  return (
    <main>
      <h1 style={titlestyle}>React: Todo List </h1>



      <div className='Todo'>

        <div>
          <div className='searchbar'>
            <input id='search' type="text" />
            <button id='add' >Add</button>
          </div>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </main>
  )
}
// const inputid = getElement
export default App;
