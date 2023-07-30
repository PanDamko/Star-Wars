import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const VehiclesPage = () => {
  const url="https://swapi.tech/api/vehicles/"
  const films = false
  return (
    <MainTemplates>
       <WaitLoading url={url} films={films} />
        </MainTemplates>
  )
}

export default VehiclesPage