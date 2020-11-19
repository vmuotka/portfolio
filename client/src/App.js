// project components
import Navigation from './components/Navigation'
import Home from './views/Home'

const App = () => {
  return (
    <div>
      <Navigation />
      <main className='mx-4'>
        <div className='w-full sm:w-4/5 mx-auto'>
          <Home />
        </div>
      </main>
    </div>
  )
}

export default App
