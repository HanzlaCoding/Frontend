import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<h1>Home Component</h1>}></Route>
        <Route path='/add' element={<h1>Product Component</h1>}></Route>
        <Route path='/update' element={<h1>Prodect Update Component</h1>}></Route>
        <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
        <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
        <Route path='/signup' element={<h1>Signup Component</h1>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App;
