import { useState, useRef } from 'react'
import { useOutsideListener } from '../hooks/'
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

  return (
    <nav ref={wrapperRef} className='fixed top-0 left-0 z-50 w-full bg-primary-400 flex flex-wrap justify-center items-center select-none py-4'>
      <div className='block sm:hidden'>
        <button
          onClick={() => setShowNav(!showNav)}
          className='text-white hover:text-primary-100 border rounded py-1.5 px-2.5 mr-4 font-lg focus:outline-none'
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
        <a
          className='font-mono sm:pr-16 py-4 font-semibold text-3xl text-white hover:text-primary-100 align-middle'
          href='#home'
        >
          Vili Muotka
          </a>
      </div>
      <div
        className={`${showNav && 'max-h-48'} max-h-0 sm:max-h-full overflow-hidden transition-all duration-300 ease-in-out  sm:block w-full sm:w-auto`}
      >
        {
          navItems.map(item =>
            <a
              className='block sm:inline px-6 py-2 font-mono font-medium sm:px-2 sm:py-4 text-xl text-white hover:text-primary-100 align-middle'
              href={`#${item.name.toLowerCase()}`}
              key={item.name}
            >
              {item.name}
            </a>
          )
        }
      </div>
    </nav>
  )
}

export default Navigation