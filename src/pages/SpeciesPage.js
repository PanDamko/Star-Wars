import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const SpeciesPage = () => {
  const url="https://swapi.tech/api/species/"
  
  return (
    <MainTemplates>
       <WaitLoading url={url} />
        </MainTemplates>
  )
}

export default SpeciesPage