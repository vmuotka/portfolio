import mytvlist from '../assets/mytvlist.png'
import ketunkolo from '../assets/ketunkolo.png'

// project components
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'MyTvList',
      desc: "A web app to track user's watch progress of TV shows, record watched shows and list shows that the user is planning to watch. Includes user profiles, a search function for both TV shows and users and a page to discover new shows based on the user's list of TV shows.",
      cover: mytvlist,
      link: 'https://vmuotka-mytvlist.herokuapp.com/user/jakk3',
      github: 'https://github.com/vmuotka/mytvlist'
    },
    {
      title: 'Ketunkolo',
      desc: 'A DnD (Dungeons&Dragons) tool web app. Contains an initiative tracker (for DnD combat) and a search for DnD spells and creatures. Users can also save their initiative tracker setups and create their own creatures, that are saved for all to use.',
      cover: ketunkolo,
      link: 'https://vmuotka-ketunkolo.herokuapp.com',
      github: 'https://github.com/vmuotka/ketunkolo'
    }
  ]
  return (
    <div id='projects' className='even:bg-primary-50'>
      <h1 className='text-5xl text-primary-700 font-semibold text-center'>Projects</h1>
      <div className='mt-8 space-y-12 flex flex-col justify-center'>
        {
          projects.map(project => <ProjectCard key={project.title} props={project} />)
        }
      </div>
    </div>
  )
}

export default Projects