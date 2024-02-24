import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'; // Import your main component (e.g., App)

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your main component */}
  </React.StrictMode>,
  document.getElementById('root') // Render inside the root element in index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
