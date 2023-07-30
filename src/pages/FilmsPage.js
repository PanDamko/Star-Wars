import React from 'react'
import MainTemplates from '../templates/MainTemplates'
import WaitLoading from '../templates/WaitLoading'
const FilmsPage = () => {
  const url="https://swapi.dev/api/films/"
  const films = true;
  return (
    <MainTemplates>
       <WaitLoading url={url} films={films} />
        </MainTemplates>
  )
}

export default FilmsPage