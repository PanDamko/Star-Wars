import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const PeoplePage = () => {
  const url="https://swapi.tech/api/people/"
  //const url="https://github.com/akabab/starwars-api/blob/master/api/all.json"
  return (
    <MainTemplates>
       <WaitLoading url={url} />
        </MainTemplates>
  )
}

export default PeoplePage