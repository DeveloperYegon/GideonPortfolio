import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Project from './Pages/Project'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import BlogsPage from './Pages/BlogsPage'
import Blog from './Pages/Blog'
import Notifications from './Pages/Notifications'
import Donate from './Pages/Donate'
import ProjectPage from './Pages/ProjectPage'

function App( ) {

  return (
    <div>     
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/donate' element={<Donate/>} />

            <Route path='/projects' element={<ProjectPage/>}/>
            <Route path='/project' >
                <Route path=':projectId' element={<Project/>}/>
            </Route>


            <Route path='/blogs' element={<BlogsPage/>}/>
            <Route path='/blog' >
                <Route path=':blogId' element={<Blog/>}/>
            </Route>

          </Routes>
          <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App