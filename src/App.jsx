import { Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shops from './pages/Shops'
import Education from './pages/Education'
import Dashboards from './pages/Dashboards'
import Profile from './pages/Profile'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import SetNav from './components/SetNavbar/SetNav'


function App() {
  return (
    <main className='w-full h-auto '>


      <SetNav>
        <Navbar />
      </SetNav>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/shops" Component={Shops} />
        <Route path="/education" Component={Education} />
        <Route path="/dashboards" Component={Dashboards} />
        <Route path="/profile" Component={Profile} />
      </Routes>

      <SetNav>
        <Footer />
      </SetNav>



    </main>
  )
}

export default App
