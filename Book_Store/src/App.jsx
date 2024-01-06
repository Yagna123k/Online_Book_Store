import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import ParentContext from './context/ParentContext'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <ParentContext/>

    </div>
  )
}

export default App
