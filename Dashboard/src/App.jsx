import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
