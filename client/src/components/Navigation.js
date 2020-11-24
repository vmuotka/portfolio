import { useState, useRef } from 'react'
import { useOutsideListener } from '../hooks/'

import { useLocation, useHistory } from 'react-router-dom'

const Navigation = () => {
  const [showNav, setShowNav] = useState(false)
  const navItems = [
    {
      name: 'Biography'
    },
    {
      name: 'Skills'
    },
    {
      name: 'Projects'
    },
  ]

  const wrapperRef = useRef(null)
  useOutsideListener(wrapperRef, () => { setShowNav(false) })

  const location = useLocation().pathname
  const history = useHistory()

  const handleNav = async (e) => {
    setShowNav(false)
    location !== '/' && await history.push('/')

    // scrolls to the selected section without pushing to history or having # in the url
    document.getElementById(e.target.value).scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <nav ref={wrapperRef} className='fixed top-0 left-0 z-50 w-full bg-primary-400 flex flex-wrap justify-center items-center select-none py-4 shadow'>
      <div className='block sm:hidden'>
        <button
          onClick={() => setShowNav(!showNav)}
          className='text-white hover:text-primary-100 border rounded py-1.5 px-2.5 mr-4 font-lg focus:outline-none active:outline-none'
        >
          <svg
            className='fill-current h-4 w-4'
            viewBox='0 0 20 20'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div>
        <button
          className='font-mono sm:pr-16 py-4 font-semibold text-3xl text-white hover:text-primary-100 align-middle focus:outline-none active:outline-none'
          value='biography'
          onClick={handleNav}
        >
          Vili Muotka
          </button>
      </div>
      <div
        className={`${showNav ? 'max-h-48' : 'max-h-0'} sm:max-h-48 overflow-hidden  duration-300  ease-in-out  sm:block w-full sm:w-auto`}
      >
        {
          navItems.map(item =>
            <button
              className='block sm:inline px-6 py-2 font-mono font-medium sm:px-2 sm:py-4 text-xl text-white hover:text-primary-100 align-middle focus:outline-none active:outline-none'
              key={item.name}
              value={item.name.toLowerCase()}
              onClick={handleNav}
            >
              {item.name}
            </button>
          )
        }
      </div>
    </nav>
  )
}

export default Navigation