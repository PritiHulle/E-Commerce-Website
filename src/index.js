import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './context/ShopContext';
//bootstrap
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import'../node_modules/bootstrap/dist/css/bootstrap.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ShopContextProvider>
<App />
</ShopContextProvider>
    
 
);

