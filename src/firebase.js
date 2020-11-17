
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPRoqUbpSP4ORuGQAHhfIahKejl7C-I-M",
    authDomain: "react-todo-app-8160d.firebaseapp.com",
    databaseURL: "https://react-todo-app-8160d.firebaseio.com",
    projectId: "react-todo-app-8160d",
    storageBucket: "react-todo-app-8160d.appspot.com",
    messagingSenderId: "555149507622",
    appId: "1:555149507622:web:14d4e3aee736824dbd7ae7",
    measurementId: "G-19TCPH1SLF"
})

const db = firebaseApp.firestore()

export default db;

// import firebase from 'firebase';

// const firebaseConfig = firebase.initializeApp({
//     apiKey: "AIzaSyBPRoqUbpSP4ORuGQAHhfIahKejl7C-I-M",
//     authDomain: "react-todo-app-8160d.firebaseapp.com",
//     databaseURL: "https://react-todo-app-8160d.firebaseio.com",
//     projectId: "react-todo-app-8160d",
//     storageBucket: "react-todo-app-8160d.appspot.com",
//     messagingSenderId: "555149507622",
//     appId: "1:555149507622:web:14d4e3aee736824dbd7ae7",
//     measurementId: "G-19TCPH1SLF"
//   });

// const db = firebaseConfig.firestore();

// export default db;
