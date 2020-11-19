import profileImg from '../assets/profile.jpg'

const Home = () => {
  return (
    <div id='home' className='mt-10 flex flex-col space-x-4 space-y-4 lg:flex-row'>
      <div className='w-full lg:w-5/12 text-center text-gray-600 text-xl'>
        <img className='w-52 mx-auto rounded-full mb-4' src={profileImg} alt='Vili with his dog' />
        <h2 className='text-3xl text-primary-700 font-medium font-mono'>Vili Muotka</h2>
        <h3>Business Information Technology Student</h3>
        <span>Laurea University of Applied Sciences</span>
      </div>
      <div className='w-full lg:w-7/12 text-gray-600 text-2xl space-y-4'>
        <h1 className='text-4xl text-primary-800 font-semibold'>Biography</h1>
        <p>
          I am a third year <span className='text-secondary-500'>Business Information Technology</span> student from Finland. Throughout school my focus has been on web development. Recently I have been focusing on <span className='text-secondary-500'>JavaScript</span> frameworks and libraries, such as <span className='text-secondary-500'>React</span>.
        </p>
        <p>
          While I have been focusing on frontend, my projects often include a backend made with <span className='text-secondary-500'>Node.js</span> for user management and data storing with <span className='text-secondary-500'>MongoDB</span>.
        </p>
      </div>
    </div>
  )
}

export default Home