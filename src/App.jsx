import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Services from './Pages/Services'
import Sidebar from './Components/Sidebar' 
import Notifications from './Pages/Notifications'

function App( ) {

  return (
    <div>
     
     
      <BrowserRouter>
      <Navbar/>
      <div className= 'sidebar w-1/2 fixed md:hidden '>
        <Sidebar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/notificatons' element={<Notifications/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/services' element={<Services/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App