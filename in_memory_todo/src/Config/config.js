import firebase from "firebase";

const DB_CONFIG = {
    apiKey: "AIzaSyBi_ocmrs3W_St7E0Rs3OUzLAmB2TFv6bI",
    authDomain: "realtime-todo-23.firebaseapp.com",
    databaseURL: "https://realtime-todo-23.firebaseio.com",
    projectId: "realtime-todo-23",
    storageBucket: "realtime-todo-23.appspot.com",
    messagingSenderId: "665067788597"
};

!firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

const db = firebase.firestore();

export default db;

