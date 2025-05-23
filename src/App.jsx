import './App.css'
import Menu from './components/Menu'
import Homepage from './components/Homepage'
import About from './components/About'
import Skills from './components/Skills'
import Assets from './components/Assets'
import Languages from './components/Languages'
import Trainings from './components/Trainings'
import Experiences from './components/Experiences'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollSpy from './components/ScrollSpy'

// import ErrorPage from './components/ErrorPage'

function App() {

  const sections = ['section-homepage', 'section-about', 'section-skills', 'section-trainings', 'section-assets', 'section-experiences', 'section-languages', 'section-hobbies']

  return (
    <>
      <Menu />

      <main>
        <section id="section-homepage"><Homepage /></section>
        <section id="section-about"><About /></section>
        <section id="section-skills"><Skills /></section>
        <section id="section-trainings"><Trainings /></section>
        <section id="section-experiences"><Experiences /></section>
        <section id="section-assets"><Assets /></section>
        <section id="section-languages"><Languages /></section>
        <section id="section-hobbies"><Hobbies /></section>
        <section id="section-contact"><Contact /></section>
      </main>

      <ScrollSpy sectionIds={sections} />

      <Footer />
    </>
  )
}

export default App
