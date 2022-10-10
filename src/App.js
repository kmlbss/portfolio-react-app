import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
function App() {
  return (
     <>

      <Routes >
        <Route path="portfolio-react-app" element={<Layout />} >  
        <Route index  element={<Home />} />
        <Route path='portfolio-react-app/about' element={<About />} />
        <Route path='portfolio-react-app/portfolio' element={<Portfolio />} />
        <Route path='portfolio-react-app/contact' element={<Contact />} />
        </Route> 
      </Routes>
     </>

  )
}

export default App
