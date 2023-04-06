import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SwitchStory from './switchStory'
import './page.css'

const Stories = () => {
  const { id } = useParams()
  const [textarea, setTextarea] = useState('')
  const [show, setShow] = useState([])
  const [adjCount, setAdjCount] = useState(0)

  /* Randomizes the order of adjectives that are added to the story */
  const showAdj = show.toString().split(', ')
  const shuffledAdj = showAdj.sort(function () {
    return Math.random() - 0.5
  })

  /* Shows how many adjectives the user needs to add */
  const handleChange = (event) => {
    setTextarea(event.target.value) 
    setAdjCount(event.target.value.split(/,\s\w/).length)
  }

  /* Resets the story to the original state */
  const handleAdjReset = (event) => {
    event.preventDefault()
    setShow([])
  }

  /* Adds the adjectives to the story */
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = document.getElementById('data')
    console.log(data.value)
    setShow(data.value)
  }

  /* Resets the adjectives form */
  const handleFormReset = (event) => {
    event.preventDefault()
    setTextarea('')
    setAdjCount(0)
  }

  /* Informs the user how many adjectives needs to be added */
  const AdjToAdd = ({ count }) => {
    if (count === 11) {
      return <div><p><em>Adjektiivit lisätty!</em></p></div>
    }
    return <div><p><em>Lisää vielä {11 - count} adjektiivia</em></p></div>
  }

  return (
    <>
      <div className='content'>
        <div className='content__box--width'>
          <div className='content__box--background content__box--padding'>
            <SwitchStory page={id} adj={shuffledAdj}/>
          </div>
          <button onClick={handleAdjReset} className='content__button--margin'>Tyhjennä</button>
        </div>
        <div>
          <form noValidate onSubmit={handleSubmit} onReset={handleFormReset}>
            <div className='content__box--background'>
              <textarea 
                type='text' 
                id='data' 
                placeholder='Lisää adjektiiveja' 
                value={textarea} 
                onChange={handleChange} />
            </div>
            <AdjToAdd count={adjCount}/>
            <div className='content__buttons'>
              <button type='submit'>Lisää</button>
              <button type='reset'>Tyhjennä</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Stories
