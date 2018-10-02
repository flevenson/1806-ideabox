import React from 'react'
import IdeaCard from './IdeaCard'
import PropTypes from 'prop-types'

const CardContainer = ({ ideas, removeIdea }) => {
  const cards = ideas.map(idea => <IdeaCard key={idea.id} {...idea} removeIdea={removeIdea} />)
  return(
    <div className="cardContainer">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

export default CardContainer
