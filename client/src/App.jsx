import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import { useState } from 'react'
import {logo} from './assets'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <header className='w-full flex justify-between items-center px-8 px-4 py-4 bg-white border-b border-black'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-28 m-2 object-contain'/>
          </Link>
          <Link to='/create-post' className='font-inter font-medium   px-4 py-2 rounded-md bg-[#6469ff] text-white'>Create</Link>
        </header>
        <main>

        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
