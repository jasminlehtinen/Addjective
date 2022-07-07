import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Stories = () => {
  const { id } = useParams()
  const [textarea, setTextarea] = useState('')
  const [show, setShow] = useState([])
  let showArray = show.toString().split(',')

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
        return <div>
                <p>Olipa kerran {show[0]} talvi. Kuningatar istui linnan ikkunan ääressä ja katseli maahan putoilevia {show[2]} lumihiutaleita.
                "Voi, olisipa minulla lapsi", kuningatar toivoi.</p>
                <p>Pian toive toteutuikin ja kuningatar sai tytön. Tyttö oli {show[1]}, ja hänen ihonsa oli {show[3]} kuin lumi. Tyttö sai nimekseen Lumikki.</p>
                <p>Valitettavasti kuningatar, Lumikin oikea äiti, kuoli pian. Kuningas meni uudelleen naimisiin, ja Lumikki sai uuden äidin. 
                Tämä oli {show[5]} ja {show[4]} nainen.</p>
                <p>Lumikin uusi äiti oli nyt maan kuningatar. Hän halusi olla myös maan {show[7]} nainen.</p>
                <p>Kuningattarella oli taikapeili, josta hän katseli itseään. Kuningatar kysyi peililtä: "Kerro, kerro, kuvastin, ken on maassa {show[8]}."
                  Peili vastasi kuningattarelle: "Sinä olet {show[6]}."
                </p>
               </div>
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
        <SwitchStory page={id} show={showArray}/>
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
