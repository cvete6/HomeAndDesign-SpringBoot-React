import * as firebase from "firebase/app";
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: "AIzaSyAOJdbh0tj1X4lmVnCGMsrhMJbi7otDVo0",
    authDomain: "homeanddesign-9222d.firebaseapp.com",
    databaseURL: "https://homeanddesign-9222d.firebaseio.com",
    projectId: "homeanddesign-9222d",
    storageBucket: "homeanddesign-9222d.appspot.com",
    messagingSenderId: "804997023837",
    appId: "1:804997023837:web:65a414a48ad999936e25b4",
    measurementId: "G-JWCFXBZ1N0"
});

export default app;