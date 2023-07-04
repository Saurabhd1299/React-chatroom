import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbi3CX1HuA68PNycLrZ_PiktI4EBcXCUw",
  authDomain: "react-chat-app-f38c1.firebaseapp.com",
  databaseURL: "https://react-chat-app-f38c1-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-f38c1",
  storageBucket: "react-chat-app-f38c1.appspot.com",
  messagingSenderId: "37307141509",
  appId: "1:37307141509:web:cecd0cf2e27205b255c8ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
