import React from 'react'
import './TagsContainer.css'

function TagsContainer(props) {
  return (
    <>
<button className='TagsButton'>
    <span>{props.tagName}</span>
</button>
</>
  )
}

export default TagsContainer