import React from 'react'
import { useParams } from 'react-router-dom'

const Stories = () => {
  const { id } = useParams()

  switch(id) {
    case '1':
      return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi scelerisque condimentum viverra. Fusce vel efficitur elit.</p>
    case '2':
      return <p>Donec non justo congue, pretium orci vel, consectetur lacus. 
                Quisque velit tellus, cursus eu sem et, tempus porttitor purus.</p>
    case '3':
      return <p>Vestibulum tempor condimentum mauris, ut consequat sem aliquam sit amet. 
                Nulla libero augue, iaculis nec lobortis ut, tincidunt at turpis. 
                Nunc tempor nulla sit amet ex rutrum, in volutpat justo tempus.</p>
    default:
      return <p>moi</p>
  }

  // Old return
  /*return (
    <>
      <p>
        {id}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Morbi scelerisque condimentum viverra. Fusce vel efficitur elit. 
        Donec non justo congue, pretium orci vel, consectetur lacus. 
        Quisque velit tellus, cursus eu sem et, tempus porttitor purus. 
        Vestibulum tempor condimentum mauris, ut consequat sem aliquam sit amet. 
        Nulla libero augue, iaculis nec lobortis ut, tincidunt at turpis. 
        Nunc tempor nulla sit amet ex rutrum, in volutpat justo tempus.
      </p>
    </>
  )*/
}

export default Stories
