import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const SpaceshipsPage = () => {
  const url="https://swapi.tech/api/starships/"
  
  return (
    <MainTemplates>
       <WaitLoading url={url} />
        </MainTemplates>
  )
}

export default SpaceshipsPage