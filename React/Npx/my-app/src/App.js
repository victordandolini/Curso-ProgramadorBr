import React from 'react'
import './App.css';
import Header from './Header';
import Counter from './Counter'

function App() {
  return(
    <div>
    <Header name="Victor Floripa" links={["Sobre", "Comprar", "Contato", "login"]}></Header>
    <Counter count={0} ></Counter>
    </div>
  )
  
    
}

export default App;
