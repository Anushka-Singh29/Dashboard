import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout'



const App = () => {
  return (
   <Routes>
    <Route path='' element={<Layout />}>
    {/* <Route path='' element={<Layout />}> */}

    </Route>

   </Routes>
  )
}

export default App
