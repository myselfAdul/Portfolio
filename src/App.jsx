
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Blogs from './Pages/Blogs/Blogs'
import Projects from './Pages/Projects/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Blogs' element={<Blogs/>} />
        <Route path='/Projects' element={<Projects/> } />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    
  )
}

export default App  


