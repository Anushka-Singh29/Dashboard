import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboards from "./components/Dashboards"
import Layout from "./components/shared/Layout"
import Products from "./components/Products"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboards />} />
          <Route path='/products' element={<Products />} />
        <Route path="login" element={<div>This is a login page</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
