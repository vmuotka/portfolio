import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark as SyntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'

// project components
import ArrowLeftIcon from '../icons/ArrowLeftIcon'

const Project = () => {
  const { project_name } = useParams()
  const [markdown, setMarkdown] = useState(null)
  const history = useHistory()

  useEffect(() => {
    fetch(`./${project_name}.md`)
      .then(data => {
        data.text().then(text => {
          // hack to redirect to homepage if the markdown file was not found
          if (text.includes('<!DOCTYPE html>'))
            history.push('/')

          setMarkdown(text)
        })
      })
  }, [project_name, history])

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter
        customStyle={{ margin: '2em 0' }}
        style={SyntaxStyle}
        showLineNumbers={true}
        language={language}
        children={value} />
    },
  }

  const handleBack = async () => {
    await history.push('/')
    // scrolls to the selected section without pushing to history or having # in the url
    document.getElementById('projects').scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  return (
    <div className='mt-10'>
      <button onClick={handleBack}>
        <span className='hidden md:inline fixed text-primary-500 hover:text-primary-600 mb-6'>
          <ArrowLeftIcon className='h-12' />
          <span>Go back</span>
        </span>
      </button>
      <div className='sm:w-2/3 lg:w-3/5 mx-auto'>
        <ReactMarkdown
          className='markdown space-y-6'
          plugins={[
            gfm,
          ]}
          children={markdown}
          renderers={renderers}
        />
      </div>
    </div>
  )
}

export default Project