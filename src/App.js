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

      <Routes>
        <Route path="my-portfolio-react-app" element={<Layout />} >

        <Route index element={<Home />} />
        <Route path='my-portfolio-react-app/about' element={<About />} />
        <Route path='my-portfolio-react-app/contact' element={<Contact />} />
        <Route path='my-portfolio-react-app/portfolio' element={<Portfolio />} />
        </Route>

      </Routes>
     </>

  )
}

export default App
