import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import BlogsPage from './Pages/BlogsPage'
import Blog from './Pages/Blog'

import Notifications from './Pages/Notifications'
import Donate from './Pages/Donate'

function App( ) {

  return (
    <div>     
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/blogs' element={<BlogsPage/>}/>
            <Route path='/donate' element={<Donate/>} />
            <Route path='/blog' element={<Blog />} >
                <Route path=':blogId' element={<Blog/>}/>
            </Route>

          </Routes>
          <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App