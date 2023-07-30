import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'

const PlanetsPage = () => {

const url="https://swapi.tech/api/planets/"
  
  return (
    <MainTemplates>
       <WaitLoading url={url} />
        </MainTemplates>
  )
}

export default PlanetsPage