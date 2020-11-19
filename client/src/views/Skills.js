// project components
import SkillCard from '../components/SkillCard'

// icons
import JsIcon from '../icons/JsIcon'
import DatabaseIcon from '../icons/DatabaseIcon'
import PHPIcon from '../icons/PHPIcon'
import CSSIcon from '../icons/CSSIcon'
import JavaIcon from '../icons/JavaIcon'
import BoxIcon from '../icons/BoxIcon'

const Skills = () => {
  const skills = [
    {
      icon: JsIcon,
      title: 'JavaScript',
      items: [
        'React',
        'Node',
        'Redux'
      ]
    },
    {
      icon: DatabaseIcon,
      title: 'Databases',
      items: [
        'MongoDB',
        'MySQL'
      ]
    },
    {
      icon: CSSIcon,
      title: 'CSS',
      items: [
        'TailwindCSS'
      ]
    },
    {
      icon: JavaIcon,
      title: 'Java',
      items: [

      ]
    },
    {
      icon: PHPIcon,
      title: 'PHP',
      items: [
        'server-side rendering',
        'backend APIs',
      ]
    },
    {
      icon: BoxIcon,
      title: 'Other',
      items: [
        'video editing',
        'audio editing',
        'photoshop'
      ]
    }
  ]

  return (
    <div id='skills' className='mt-16 py-20 text-center'>
      <h1 className='text-5xl text-primary-700 font-semibold text-center'>Skills</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12 mt-8'>
        {
          skills.map(skill => <SkillCard key={skill.title} props={skill} />)
        }
      </div>
    </div>
  )
}

export default Skills