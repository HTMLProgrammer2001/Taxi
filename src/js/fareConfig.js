import * as firebase from 'firebase/app';

let fireBaseConfig = {
    apiKey: "AIzaSyDdJjjkx2zXC_pIjlW7MtTgU2HvYFrqIqY",
    authDomain: "forwork-1579542004155.firebaseapp.com",
    databaseURL: "https://forwork-1579542004155.firebaseio.com",
    projectId: "forwork-1579542004155",
    storageBucket: "forwork-1579542004155.appspot.com",
    messagingSenderId: "591558800067",
    appId: "1:591558800067:web:41e749971b0784e9302876",
    measurementId: "G-BBCZS5L5MK"
},
    firebaseProj = firebase.initializeApp(fireBaseConfig);

export default firebaseProj;