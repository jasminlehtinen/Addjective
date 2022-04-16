import React from 'react'
import { useParams } from 'react-router-dom'

const Stories = () => {

  const { id } = useParams()

  const SwitchStory = ({ page }) => {
    switch(page) {
      case '1':
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque condimentum viverra. Fusce vel efficitur elit.'
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
        <SwitchStory page={id}/>
      </div>
    </>
  )
}

export default Stories
