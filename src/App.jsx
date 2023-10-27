import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Read from './components/Read'
import Create from './components/Create'

function App() {


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Read />}></Route>
          <Route path="/create" element={<Create />}></Route>
          `</Routes>

      </BrowserRouter>
    </>
  )
}

export default App
