// project components
import Navigation from './components/Navigation'
import Biography from './views/Biography'
import Skills from './views/Skills'
import Projects from './views/Projects'

const App = () => {
  return (
    <div className='mb-32'>
      <Navigation />
      <main className='mx-4 break-words'>
        <div className='w-full sm:w-4/5 mx-auto'>
          <Biography />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
