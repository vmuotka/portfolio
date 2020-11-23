// icons
import GlobeIcon from '../icons/GlobeIcon'
import GithubIcon from '../icons/GithubIcon'
import InfoIcon from '../icons/InfoIcon'

import { Link } from 'react-router-dom'


const Project = (props) => {
  props = props.props
  return (
    <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
      <img className='w-96 shadow self-center' src={props.cover} alt={`cover for project: ${props.title}`} />
      <div className='md:w-2/3 self-center'>
        <h3 className='text-2xl font-semibold'>{props.title}</h3>
        <p className='text-gray-600 text-lg'>
          {props.desc}
        </p>
        <span className='flex space-x-4 mt-2'>
          <a
            className='text-lg w-min flex text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-primary-100 font-semibold rounded py-1 px-2'
            href={props.link}
            target='_blank'
            rel='noreferrer'
          >
            <GlobeIcon className='h-5 inline mr-1 self-center' />
            Website
          </a>
          <a
            className='text-lg w-min flex text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-primary-100 font-semibold rounded py-1 px-2'
            href={props.github}
            target='_blank'
            rel='noreferrer'
          >
            <GithubIcon className='h-5 inline mr-1 self-center' />
            Github
          </a>
          {props.details &&
            <Link
              className='text-lg w-min flex text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-primary-100 font-semibold rounded py-1 px-2'
              to={`/project/${props.title.toLowerCase()}`}
            >
              <InfoIcon className='h-5 inline mr-1 self-center' />
              Details
            </Link>
          }

        </span>
      </div>
    </div>
  )
}

export default Project