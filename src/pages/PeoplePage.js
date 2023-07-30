import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const PeoplePage = () => {
  const url="https://swapi.tech/api/people/"
  
  return (
    <MainTemplates>
       <WaitLoading url={url} />
        </MainTemplates>
  )
}

export default PeoplePage