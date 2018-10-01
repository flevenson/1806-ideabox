import React from 'react'
import IdeaCard from './IdeaCard'

const CardContainer = (props) => {
  const cards = props.ideas.map(idea => <IdeaCard idea={idea}/>)
  return(
    <div className="cardContainer">
      { cards }
    </div>
  )
}

export default CardContainer
