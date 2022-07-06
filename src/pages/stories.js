import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Stories = () => {
  const { id } = useParams()
  const [textarea, setTextarea] = useState('')
  const [show, setShow] = useState([])

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = document.getElementById('data')
    console.log(data.value)
    setShow(data.value)
  }

  const SwitchStory = ({ page, show }) => {
    switch(page) {
      case '1':
        return <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque condimentum viverra. Fusce vel efficitur elit.</div>
      case '2':
        return 'Donec non justo congue, pretium orci vel, consectetur lacus. Quisque velit tellus, cursus eu sem et, tempus porttitor purus.'
      case '3':
        return 'Vestibulum tempor condimentum mauris, ut consequat sem aliquam sit amet. Nulla libero augue, iaculis nec lobortis ut, tincidunt at turpis.'
      default:
        return 'Error.'
    }
  }

  return (
    <>
      <div className='content'>
        <SwitchStory page={id} show={show}/>
        <form noValidate onSubmit={handleSubmit}>
          <textarea 
            type='text' 
            id='data' 
            placeholder='Lisää adjektiiveja' 
            value={textarea} 
            onChange={handleChange} />
          <button type='submit'>Lisää</button>
          <p>{show}</p>
        </form>
      </div>
    </>
  )
}

export default Stories
