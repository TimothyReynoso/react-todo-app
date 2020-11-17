import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase'
import firebase from 'firebase'

const useStyles = makeStyles((theme) =>({
        paper: {
            position: 'absolute',
            background: 'gray',
            border: 1,
            borderRadius: 3,
            color: 'black',
            width: 500,
            height: 100,
            padding: '0px 30px 30px 30px',
          },
    }))

function Todo(props){

    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')
    const handleClose = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true})
        setOpen(false)
    }

    return(
       
                <> 
                <List id='todoList'>
                    <Modal
                    open={open}
                    onClose={(event) => {setOpen(false)}}
                    className={classes.paper}
                    >
                        <div>
                            <p>Update todo - Name:{props.todo.todo}, id:{props.todo.id}</p>
                            <FormControl>
                                <InputLabel htmlFor="my-input">📝 EDIT Todo</InputLabel>
                                <Input 
                                value={input} 
                                onChange={event => setInput(event.target.value)} 
                                id="my-input" 
                                aria-describedby="my-helper-text" 
                                />
                                <FormHelperText id="my-helper-text">enter tasks you want to complete</FormHelperText>
                            </FormControl>
                            <Button
                            variant="contained" 
                            color="primary"
                            onClick={updateTodo}>Update</Button>
                        </div>
                    </Modal>
                    
                    <ListItem id='listItem'>
                        <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        </ListItemAvatar>
                        
                        <ListItemText primary={`${props.todo.todo} 👈🏽`} secondary='Todo'/>
                        <EditIcon onClick={(event) => {setOpen(true)}}/>
                        <Button 
                        type='submit'
                        onClick={(event) => {db.collection('todos').doc(props.todo.id).delete()}}
                        variant="contained" 
                        color="primary"
                        >
                            Delete <DeleteIcon />
                        </Button>
                    </ListItem>
                    </List>
                </>  
        
      
    )
}

export default Todo;



// class Todo extends React.Component {
//     constructor(props){
//         super(props);

//     }

//     render(){
//         return(
//         <div>
//             <ul>
//                 {this.props.name.map(todo => (
//                 <li>{todo}</li>
//                 ))}
//                 <li></li>
//                 <li></li>
//             </ul>
//         </div>
//         )
//     }
// }

