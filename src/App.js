import React from 'react'
import './index.css'
import Counter from './components/counter/Counter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Submit from './components/Submit';


const App = () => {
  return (
    <div className='container'>
        <Header />
        <Counter />
        <Footer />
        <Submit />
    </div>
  )
}

export default App;