import './App.css'
import Menu from './components/Menu'
import Presentation from './components/Presentation'
import Competences from './components/Competences'
import Formations from './components/Formations'
import Experience from './components/Experience'
import CentresInteret from './components/CentresInteret'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Menu />

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Navigate to="/presentation" replace />} />
        <Route path='/presentation' element={<Presentation />} />
        <Route path='/skills' element={<Competences />} />
        <Route path='/formations' element={<Formations />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/centresInteret' element={<CentresInteret />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
