import React, {useState, useEffect} from 'react'
import {Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core/';
import Todo from './Todo'
import './App.css';
import db from './firebase'
import firebase from "firebase";

function App(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  //when app loads we want to listen to the database and fetch new todos as they are added/removed.
  useEffect(() => {
    
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])


  const addTodo = (e) => {
    e.preventDefault();
// if(input != '' && e.code == 'enter' || e.code == undefined){
//   setTodos([...todos, input])
// }
    // console.log(e)
    if(input !== ''){
      
    //   db.collection("todos").doc(`${input}`).set({
    //     todo: input,
    // })
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
      // setTodos([...todos, input])
      setInput('')
    }
  }
// onKeyPress={addTodo}
  return (
    <div className='App'>
      <h1>React Todo App 🗒</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">✅ Type a Todo</InputLabel>
          <Input 
          value={input} 
          onChange={event => setInput(event.target.value)} 
          id="my-input" 
          aria-describedby="my-helper-text" 
          />
          <FormHelperText id="my-helper-text">enter tasks you want to complete</FormHelperText>
        </FormControl>
        
        <Button
        //disabled={!input} => will do the same as gaurd clause in addTodo()
        type='submit' 
        onClick={addTodo} 
        variant="contained" 
        color="primary"
        >
          Add Todo
        </Button>

      </form>
      <ul>
        {todos.map(function(todo){
          return <Todo todo={todo} />
        })}
      </ul>
      
      

    </div>
  )
}

export default App;
