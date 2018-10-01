import React from 'react'

const IdeaCard = (props) => {
  return(
    <div>
      <h3>{props.idea.title}</h3>
      <p>{props.idea.body}</p>
    </div>
  )
}

export default IdeaCard
