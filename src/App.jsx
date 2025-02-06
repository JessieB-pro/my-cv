import './App.css'
import Menu from './components/Menu'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Assets from './components/Assets'
import Languages from './components/Languages'
import Trainings from './components/Trainings'
import Experiences from './components/Experiences'
import Hobbies from './components/Hobbies'
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
        <Route path='/skills' element={<Skills />} />
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/languages' element={<Languages />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
