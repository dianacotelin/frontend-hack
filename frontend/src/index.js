import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './components/Basic'

import About from './components/About';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <Modern />
//     <About />
//     <Basic />
//   </React.StrictMode>
// );
ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/basic' element={<Basic/>}/>
      </Routes>
    </Router>,

  document.getElementById('root')
);

reportWebVitals();