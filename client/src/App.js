import { Switch, Route } from 'react-router-dom'

// project components
import Navigation from './components/Navigation'
import Biography from './views/Biography'
import Skills from './views/Skills'
import Projects from './views/Projects'
import Project from './views/Project'

const App = () => {
  return (
    <div className='mb-32'>
      <Navigation />
      <main className='mx-4'>
        <div id='homepage' className='w-full sm:w-4/5 mx-auto'>
          <Switch>
            <Route path='/project/:project_name'>
              <Project />
            </Route>
            <Route path='/'>
              <Biography />
              <Skills />
              <Projects />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default App
