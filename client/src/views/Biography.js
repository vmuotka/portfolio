import profileImg from '../assets/profile.jpg'

// icons
import GithubIcon from '../icons/GithubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import EmailIcon from '../icons/EmailIcon'

const Link = (props) => {
  props = props.props
  return (
    <span>
      <a className='text-black' href={props.href} target='_blank' rel='noreferrer'>
        <props.icon className='h-12 w-12' />
      </a>
    </span>
  )
}

const Biography = () => {
  const links = [
    {
      icon: GithubIcon,
      href: 'https://github.com/vmuotka'
    },
    {
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/vili-muotka-b30022200/'
    },
  ]

  const handleEmail = () => {
    // eslint-disable-next-line no-useless-concat
    const email = 'mailto:' + 'vili.muotka' + '@gmail.com'
    console.log(email)
    window.location = email
  }

  return (
    <div id='biography' className='mt-10 flex flex-col sm:space-x-6 space-y-4 lg:flex-row even:bg-primary-50 text-left'>
      <div className='w-full lg:w-5/12 text-center text-gray-600 text-xl'>
        <img
          className='w-52 mx-auto rounded-full mb-4'
          src={profileImg}
          alt='Vili with his dog'
        />
        <h2 className='text-3xl text-primary-700 font-medium font-mono'>Vili Muotka</h2>
        <h3>Business Information Technology Student</h3>
        <a href='https://www.laurea.fi/en/' target='_blank' rel='noreferrer' className='text-blue-600'>Laurea University of Applied Sciences</a>
        <div className='flex justify-center space-x-1.5 mt-1.5'>
          {
            links.map((item, index) => <Link key={index} props={item} />)
          }
          <span className='flex content-center'>
            <button onClick={handleEmail} title='mailto:me'>
              <EmailIcon className='h-10 w-10 text-gray-800' />
            </button>
          </span>
        </div>
      </div>
      <div className='w-full lg:w-7/12 text-gray-600 text-2xl space-y-4'>
        <h1 className='text-4xl text-primary-700 font-semibold'>Biography</h1>
        <p className='break-words'>
          I am a third year <span className='font-semibold text-gray-700'>Business Information Technology</span> student from Finland. Throughout school, web development has been at the center of my attention. Recently I have been focusing on <span className='font-semibold text-gray-700'>JavaScript</span> frameworks and libraries, such as <span className='font-semibold text-gray-700'>React</span>.
        </p>
        <p>
          While I have been focusing on front-end, my projects often include a back-end made with <span className='font-semibold text-gray-700'>Node.js</span> for user management and <span className='font-semibold text-gray-700'>MongoDB</span> for data storing.
        </p>
      </div>
    </div>
  )
}

export default Biography