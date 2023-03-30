import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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

  /* Function to turn the first letter of an adjective to upper case */
  const firstLetter = (adjective) => {
    if (adjective !== undefined) {
      return adjective.charAt(0).toUpperCase() + adjective.slice(1)
    }
  }

  /* Switch statement for three different stories */
  const SwitchStory = ({ page }) => {
    switch(page) {
      case '1':
        return <div>  
                <h1>Kolme Pukkia</h1>
                <p>Olipa kerran kolme pukkia: {shuffledAdj[0]}-Pukki, {shuffledAdj[1]}-Pukki ja {shuffledAdj[2]}-Pukki.</p>
                <p>
                  Pukit asuivat jyrkän vuoren rinteellä. Ne olivat syöneet kaiken ruohon ympäriltään, ja nyt ne olivat kovin nälkäisiä. 
                  Vuoren alapuolella laaksossa oli {shuffledAdj[3]} niitty täynnä makoisaa ruohoa. 
                  Mutta niitylle päästäkseen pukkien oli kuljettava sillan yli, ja sillan alla asui {shuffledAdj[4]} peikko.
                </p>
                <p>– Minulla on nälkä, sanoi {shuffledAdj[0]}-Pukki. – Aion päästä niitylle, enkä pelkää peikkoa.</p>
                <p>
                  Ja ennenkuin muut ehtivät estellä, {shuffledAdj[5]} {shuffledAdj[0]}-Pukki astui sillalle. Kip-kip-kip se kipitti vikkelästi sillan yli. 
                  Silloin sillan alta kuului uhkaavaa mörinää.
                </p>
                <p>– Kuka uskaltaa kulkea minun sillallani? ärjyi peikko.</p>
                <p>– Minä vain, {shuffledAdj[0]}-Pukki, vastasi pienin pukki ääni väristen.</p>
                <p>– Ha haa, minä tulen ylös ja syön sinut, raakkui peikko.</p>
                <p>Pienen pukin jalat tutisivat pelosta, mutta se päätti olla {shuffledAdj[6]} – ja peikkoa ovelampi.</p>
                <p>– Älä syö minua, huusi pukki. Minun isoveljeni tulee aivan kohta, hän on paljon pulleampi kuin minä.</p>
                <p>
                  Peikko lipoi huuliaan ja mietti hetken. Jos se söisi {shuffledAdj[0]}-Pukin, ei vatsaan mahtuisi toista pukkia. Peikko oli {shuffledAdj[7]}. 
                  Se päätti odottaa isompaa pukkia, ja päästi pienen pukin menemään.
                </p>
                <p>Kohta sillalle astui {shuffledAdj[1]}-Pukki. Kop-kop-kop, se kopisteli sillan yli.</p>
                <p>– Kuka uskaltaa kulkea minun sillallani? ärisi peikko.</p>
                <p>– Minä vain, {shuffledAdj[1]}-Pukki, vastasi pukki.</p>
                <p>– Ha haa, minä tulen ylös ja syön sinut, sanoi peikko.</p>
                <p>– Älä syö minua, huusi {shuffledAdj[1]}-Pukki. Minun isoveljeni tulee aivan kohta, hän on paljon lihavampi kuin minä.</p>
                <p>Peikko ärjyi kiukkuisena, mutta oli kuitenkin niin {shuffledAdj[8]}, että päätti odottaa isointa pukkia.</p>
                <p>Kohta isoin pukki tömisteli tömps-tömps-tömps sillalle.</p>
                <p>– Kuka kulkee minun sillallani? karjui peikko taas.</p>
                <p>– Minäpä minä, {shuffledAdj[2]}-Pukki, huusi pukki.</p>
                <p>– Ha haa, minä tulen ylös ja syön sinut, sanoi peikko.</p>
                <p>– Tule vain, huusi {shuffledAdj[2]}-Pukki.</p>
                <p>
                  Peikko rämpi ylös siltansa alta. Mutta ennenkuin se oli saanut kiskottua jalkansa kuivalle maalle, laski {shuffledAdj[9]} pukki sarvensa tanaan ja tökkäsi ne peikon takapuoleen. 
                  Peikko lensi rähmälleen jokeen, eikä sitä nähty enää koskaan niillä main.
                </p>
                <p>
                  Ja niin kaikki kolme pukkia pääsivät turvallisesti niitylle. 
                  Ruoho oli {shuffledAdj[10]} ja pukit söivät vatsansa niin täyteen, että tuskin jaksoivat kävellä kotiin. Sen pituinen se.
                </p>
              </div>
      case '2':
        return <div>
                <h1>Kolme Pientä Porsasta</h1>
                <p>
                  Olipa kerran possuäiti, jolla oli kolme lasta. Kun porsaat olivat kasvaneet tarpeeksi isoiksi, possuäiti lähetti ne maailmalle. 
                  Se sanoi: ”Menkää ja rakentakaa itsellenne {shuffledAdj[0]} koti. Onnea matkaan! Mutta muistakaa varoa isoa pahaa sutta!”
                </p>
                <p>
                  Ensimmäinen pikkupossu kulki maantietä pitkin vihellellen. Sitä vastaan käveli mies olkilyhde käsissään. 
                  Pikkupossu oli melkoisen {shuffledAdj[1]}, eikä sitä huvittanut kävellä pidemmälle. 
                  Niinpä se sanoi miehelle: ”Voisitko myydä minulle nuo oljet? Minä haluaisin rakentaa niistä itselleni talon”. Mies suostui. 
                  Ja niin ensimmäinen pikkupossu rakensi itselleen oljista talon.
                </p>
                <p>
                  Toinen possuista oli melkoisen {shuffledAdj[2]} sekin, mutta ei sentään niin {shuffledAdj[3]} kuin ensimmäinen. 
                  Se jaksoi kulkea maantietä hiukan pidemmälle kuin veljensä. Silloin vastaan tuli mies, joka kantoi risuja kädessään. 
                  ”Voisitko myydä minulle nuo risut?” possu kysyi mieheltä. ”Haluaisin rakentaa niistä itselleni talon”. 
                  Mies suostui, ja niin toinenkin pikkupossu sai itselleen kodin.
                </p>
                <p>
                  Kolmaskin pikkupossu oli lähtenyt maailmalle. Mutta se olikin paljon ahkerampi kuin kaksi veljeään. 
                  Tämä kolmas pikkupossu käveli maantietä pitkin paljon kauemmas. 
                  Se oli näet päättänyt valmistaa oman kotinsa tiilistä, jotta talosta tulisi tarpeeksi {shuffledAdj[4]} ja {shuffledAdj[5]}. 
                  Pitkän matkaa kuljettuaan possu löysikin tiilikauppiaan, ja sai ostettua itselleen ison kasan tiiliä. ”Näistä minä teen hienon talon itselleni”, se tuumasi. 
                  Ja se ryhtyi ahkerana työhön. Se muurasi ja laastasi ja rakensi taloaan kerros kerrokselta valmiiksi.
                </p>
                <p>
                  Sillä välillä iso {shuffledAdj[6]} susi sai kuulla possujen talonrakennuspuuhista. 
                  ”Hah”, tuumasi susi. ”Nuo possunpalleroiset minä pistelenkin suuhuni!”
                </p>
                <p>
                  Eikä aikaakaan, kun susi koputti ensimmäisen pienen porsaan oveen. 
                  Susi sanoi: ”{firstLetter(shuffledAdj[7])} {shuffledAdj[8]} possu, päästäthän minut sisään”. 
                  Mutta pikkupossu muisti äitinsä neuvon. ”Ei, ei, kautta leukapartani, en aio päästää sisälle ketään”, se vastasi. Susi harmistui. 
                  ”Jos et päästä minua sisään, minä uhkun ja puhkun ja puhallan olkitalosi kumoon”, se vastasi.
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja koska talo oli tehty oljista, se meni helposti rikki. Mutta onneksi {shuffledAdj[9]} possu ehti kuin ehtikin pakoon. 
                  Se juoksi pienillä possunsorkillaan suoraan veljensä luo turvaan. Susi jäi vihaisena makaamaan olkikasaan.
                </p>
                <p>
                  Vaan eipä aikaakaan, kun iso {shuffledAdj[6]} susi koputti toisenkin possun ovelle. 
                  ”Kiltit pienet possut, päästäkää minut sisään”, susi huhuili taas. ”Ei avata!”, kuului possujen tiukka vastaus. 
                  ”Ei, ei, kautta leukapartamme, emme aio päästää sisälle ketään!” Susi suuttui. 
                  ”Jos ette päästä minua sisään, minä uhkun ja puhkun ja puhallan risutalonne kumoon!”
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja koska talo oli tehty risuista, sekin meni helposti rikki. 
                  Mutta onneksi pikkupossut ehtivät pötkiä pakoon kolmannen possun taloon, eikä susi saanut niitä kiinni. Se jäi kiukkuisena makaamaan risukasaan.
                </p>
                <p>
                  Mutta eipä aikaakaan, kun susi oli löytänyt kolmannenkin possun kodin ja tuli taas ovelle kolkuttelemaan. 
                  ”Kiltit pienet possut, päästäkää minut sisään”, huusi susi. Nyt se oli jo todella {shuffledAdj[10]}. ”Ei päästetä”, vastasivat pikkupossut yhteen ääneen. 
                  ”Ei, ei, kautta leukapartamme, emme aio päästää sisälle ketään!” Susi kimpaantui. 
                  ”Jos ette päästä minua sisään, minä uhkun ja puhkun ja puhallan tämänkin talon kumoon!”
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja puhalsi ja puhkui. Mutta tiilitalo ei hievahtanutkaan, ei vaikka susi kuinka yritti. 
                  Tämä talo oli näet huolellisesti rakennettu. Silloin susi huomasi talon katolla savupiipun ja sanoi: 
                  ”Hah, minäpä kiipeän savupiippua pitkin sisään ja tulen syömään teidät!” Possut pelästyivät, mutta eivät sanoneet mitään.
                </p>
                <p>
                  Sen sijaan he sytyttivät tulen takkaan ja nostivat suuren padan tulelle. Vesi lämpeni nopeasti. 
                  Ja kun iso {shuffledAdj[6]} susi kiipesi savupiippua pitkin alas possujen tupaan, se molskahti suoraa päätä kuumaan pataan. 
                  Susi kiljahti pelästyksestä ja juoksi matkoihinsa, eikä se enää ikinä tullut takaisin kiusaamaan possuja.
                </p>
                <p>
                  Ja niin kolme nokkelaa possua elelivät tiilitalossaan onnellisena elämänsä loppuun asti. Sen pituinen se.
                </p>
              </div>
      case '3':
        return <div>
                <h1>Kultakutri Ja Kolme Karhua</h1>
                <p>
                  Olipa kerran kolme karhua, jotka asuivat pienessä mökissä keskellä metsää. Yksi heistä oli suuren {shuffledAdj[0]} isäkarhu. 
                  Toinen oli aika {shuffledAdj[1]} äitikarhu ja kolmas pienen {shuffledAdj[2]} Pikku-Karhu.
                </p>
                <p>
                  Eräänä aamuna äitikarhu keitti kaikille puuroa aamiaiseksi. Ensin hän kaatoi puuroa ison isoon lautaseen isäkarhulle. 
                  Sitten hän kaatoi puuroa aika isoon lautaseen itselleen ja lopuksi pienen pieneen lautaseen Pikku-Karhulle. 
                  Sitten he menivät kaikki metsään kävelylle odottamaan puuron jäähtymistä.
                </p>
                <p>
                  Samana aamuna eräs pikkutyttö, jota kutsuttiin Kultakutriksi, oli lähtenyt yksin metsään leikkimään. 
                  Kultakutri oli kävellyt kauas omasta kotoaan, oikeastaan paljon kauemmas kuin olisi saanutkaan. 
                  Mutta Kultakutri oli {shuffledAdj[3]} pikkutyttö, eikä hän aina muistanut totella vanhempiaan. Äkkiä hän huomasi puiden keskellä mökin. 
                  ”Kukahan noin sievässä mökissä mahtaa asua?” hän tuumi. Kultakutri koputti uteliaana mökin oveen, mutta kukaan ei vastannut. 
                  Hän avasi oven. Sisällä ei näkynyt ketään.
                </p>
                <p>
                  Kultakutri näki pöydällä höyryävät puurolautaset. Puuro tuoksui niin hyvältä, että hän päätti maistaa sitä. Ensin hän maistoi suuren suuresta lautasesta. 
                  ”Tämä on aivan liian kuumaa”, hän sanoi. Sitten hän maistoi aika suuresta lautasesta. ”Tämä on ihan liian kylmää”, hän tuumi. 
                  Ja viimein hän maistoi pikkuruiselta lautaselta. Se puuro oli juuri sopivaa, ja niin Kultakutri söi hyvällä ruokahalulla koko lautasellisen.
                </p>
                <p>
                  Kultakutria alkoi nyt väsyttää, ja hän päätti istahtaa hetkeksi. Ensin hän istui suureen tuoliin. ”Tämä on aivan liian {shuffledAdj[4]}”, hän sanoi. 
                  Sitten hän istui aika suureen tuoliin. ”Tämä on aivan liian {shuffledAdj[5]},” hän tuumi. Sitten hän istui pikkuruiseen tuoliin. 
                  ”Tämä on juuri {shuffledAdj[6]}”, hän sanoi. Mutta kun hän istui siinä, tuoli menikin rikki.
                </p>
                <p>
                  Kultakutri meni nyt makuuhuoneeseen. Sielläkään ei ollut ketään, mutta vastasijatut vuoteet näyttivät kovin houkuttelevilta. 
                  Ensin hän kokeili suurinta sänkyä. ”Tämä on aivan liian {shuffledAdj[7]}”, hän sanoi. Keskikokoinen sänky oli puolestaan aivan liian {shuffledAdj[8]}. 
                  Mutta pienin sänky oli juuri {shuffledAdj[9]}, ja hän päätti torkahtaa hieman.
                </p>
                <p>
                  Mutta nyt karhut palasivat takaisin kotiin. He huomasivat heti, että joku oli käynyt heidän talossaan. Karhut katsoivat puurolautasiaan. 
                  ”Joku on maistanut puuroani”, sanoi isäkarhu suuren suurella äänellään. ”Joku on maistanut minunkin puuroani”, sanoi äitikarhu aika suurella äänellään. 
                  ”Joku on maistanut minunkin puuroani – ja syönyt sen kokonaan”, sanoi Pikku-Karhu.
                </p>
                <p>
                  Seuraavaksi karhut vilkaisivat tuolejaan. ”Joku on istunut minun tuolissani”, sanoi isäkarhu suuren suurella äänellään. 
                  ”Joku on istunut minunkin tuolissani”, sanoi äitikarhu aika suurellaan äänellään. ”Joku on istunut minunkin tuolissani – ja rikkonut sen”, sanoi Pikku-Karhu.
                </p>
                <p>
                  Sitten karhut menivät makuuhuoneeseen. ”Joku on nukkunut sängyssäni”, sanoi isäkarhu suuren suurella äänellään. 
                  ”Joku on nukkunut minunkin sängyssäni”, sanoi äitikarhu aika suurella äänellään. Mutta silloin Pikku-Karhu huudahti: 
                  ”Joku on nukkunut minunkin sängyssäni – ja nukkuu siellä yhä!”
                </p>
                <p>
                  Juuri silloin Kultakutri heräsi päiväuniltaan. Kun hän näki karhut, hän pelästyi aivan kamalasti. 
                  Kultakutri hyppäsi kiireesti ylös sängystä ja juoksi ulos ovesta ennen kuin karhut ehtivät sanoa mitään. 
                  Sitten hän juoksi juoksemistaan metsän halki, kunnes pääsi takaisin omaan kotiinsa.
                </p>
                <p>”Harmi, että tytölle tuli niin {shuffledAdj[10]} kiire”, tuumi Pikku-Karhu. ”Olisin kovin mielelläni leikkinyt hänen kanssaan.</p>
                <p>Mutta Kultakutri ei enää koskaan uskaltautunut metsään yksin, eikä hän enää ikinä palannut karhujen talolle. Sen pituinen se.</p>
              </div>
      default:
        return 'Error.'
    }
  }

  return (
    <>
      <div className='content'>
        <div className='content__box--width'>
          <div className='content__box--background content__box--padding'>
            <SwitchStory page={id}/>
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
