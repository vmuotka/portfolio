const SkillCard = (props) => {
  props = props.props
  return (
    <div>
      {props.icon && <props.icon className='p-2 h-24 w-24 mx-auto' />}
      <h3 className='text-2xl font-semibold mt-2 mb-1'>{props.title}</h3>
      <span className='text-lg font-medium'>{props.items.join(', ')}</span>
    </div>
  )
}

export default SkillCard