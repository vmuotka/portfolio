import profileImg from '../assets/profile.webp'

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
    {
      icon: EmailIcon,
      href: 'mailto:vili.muotka@gmail.com'
    }
  ]

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
        <a href='https://www.laurea.fi/en/' target='_blank' rel='noreferrer'>Laurea University of Applied Sciences</a>
        <div className='flex justify-center space-x-1.5 mt-1.5'>
          {
            links.map((item, index) => <Link key={index} props={item} />)
          }
        </div>
      </div>
      <div className='w-full lg:w-7/12 text-gray-600 text-2xl space-y-4'>
        <h1 className='text-4xl text-primary-700 font-semibold'>Biography</h1>
        <p className='break-words'>
          I am a third year <span className='font-semibold text-gray-700'>Business Information Technology</span> student from Finland. I became interested in coding when I was in upper secondary school. In Laurea, I gravitated towards web development. Recently I have been focusing on <span className='font-semibold text-gray-700'>JavaScript</span> frameworks and libraries, such as <span className='font-semibold text-gray-700'>React</span>.
        </p>
        <p>
          While my focus has been on front-end, my projects often include a back-end made with <span className='font-semibold text-gray-700'>Node.js</span> and <span className='font-semibold text-gray-700'>MongoDB</span>.
        </p>
      </div>
    </div>
  )
}

export default Biography