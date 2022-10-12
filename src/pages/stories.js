import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Stories = () => {
  const { id } = useParams()
  const [textarea, setTextarea] = useState('')
  const [show, setShow] = useState([])

  let [count, setCount] = useState(0)

  const showAdj = show.toString().split(',')
  const shuffledAdj = showAdj.sort(function () {
    return Math.random() - 0.5
  })

  const handleChange = (event) => {
    setTextarea(event.target.value) 
    setCount(event.target.value.split(',').length)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = document.getElementById('data')
    console.log(data.value)
    setShow(data.value)
  }

  const SwitchStory = ({ page }) => {
    switch(page) {
      case '1':
        return <div>  
                <h1>Kolme Pientä Porsasta</h1>
                <p>
                  Olipa kerran possuäiti, jolla oli kolme lasta. Kun nuorinkin porsas oli tarpeeksi {shuffledAdj[0]}, possuäiti lähetti ne maailmalle. 
                  Se sanoi: ”Menkää ja rakentakaa itsellenne {shuffledAdj[1]} koti. Onnea matkaan! Mutta muistakaa varoa sutta, se on {shuffledAdj[2]} ja {shuffledAdj[3]}!”
                </p>
                <p>
                  Ensimmäinen pikkupossu kulki maantietä pitkin vihellellen. Sitä vastaan käveli mies olkilyhde käsissään. 
                  Pikkupossu oli melkoisen {shuffledAdj[4]}, eikä sitä huvittanut kävellä pidemmälle. 
                  Niinpä se sanoi miehelle: ”Voisitko myydä minulle nuo oljet? Minä haluaisin rakentaa niistä itselleni talon”. Mies suostui. 
                  Ja niin ensimmäinen pikkupossu rakensi itselleen oljista talon.
                </p>
                <p>
                  Toinen possuista oli melkoisen {shuffledAdj[5]} sekin, mutta ei sentään niin {shuffledAdj[6]} kuin ensimmäinen. 
                  Se jaksoi kulkea maantietä hiukan pidemmälle kuin veljensä. Silloin vastaan tuli mies, joka kantoi risuja kädessään. 
                  ”Voisitko myydä minulle nuo risut?” possu kysyi mieheltä. 
                  ”Haluaisin rakentaa niistä itselleni talon”. Mies suostui, ja niin toinenkin pikkupossu sai itselleen kodin.
                </p>
                <p>
                  Kolmaskin pikkupossu oli lähtenyt maailmalle. Mutta se olikin {shuffledAdj[7]}, toisin kuin kaksi veljeään. 
                  Tämä kolmas pikkupossu käveli maantietä pitkin paljon kauemmas. 
                  Se oli näet päättänyt valmistaa oman kotinsa tiilistä, jotta talosta tulisi tarpeeksi {shuffledAdj[8]} ja {shuffledAdj[9]}. 
                  Pitkän matkaa kuljettuaan possu löysikin tiilikauppiaan, ja sai ostettua itselleen kasan tiiliä. Tiilikasa oli {shuffledAdj[10]}.
                  ”Tästä talosta tulee {shuffledAdj[11]}”, se tuumasi. Ja se ryhtyi työhön, ollessaan täysin {shuffledAdj[12]}. 
                  Se muurasi ja laastasi ja rakensi taloaan kerros kerrokselta valmiiksi.
                </p>
                <p>
                  Sillä välillä {shuffledAdj[13]} {shuffledAdj[14]} susi sai kuulla possujen talonrakennuspuuhista. ”Hah”, tuumasi susi. 
                  ”Nuo possunpalleroiset minä pistelenkin suuhuni!”
                </p>
                <p>
                  Eikä aikaakaan, kun susi koputti ensimmäisen talon oveen, jossa asui {shuffledAdj[15]} porsas. 
                  Susi sanoi: ”{shuffledAdj[16]} {shuffledAdj[17]} possu, päästäthän minut sisään”. 
                  Mutta pikkupossu muisti äitinsä neuvon. ”Ei, ei, kautta leukapartani, en aio päästää sisälle ketään”, se vastasi. Susi harmistui. 
                  ”Jos et päästä minua sisään, minä uhkun ja puhkun ja puhallan olkitalosi kumoon”, se vastasi.
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja koska talo oli tehty oljista, se meni helposti rikki. 
                  Mutta onneksi {shuffledAdj[18]} possu ehti kuin ehtikin pakoon. Se juoksi possunsorkillaan suoraan veljensä luo turvaan. 
                  Susi jäi makaamaan olkikasaan, ollessaan täysin {shuffledAdj[19]}.
                </p>
                <p>
                  Vaan eipä aikaakaan, kun {shuffledAdj[20]} {shuffledAdj[21]} susi koputti toisenkin possun ovelle. 
                  ”Pienet pienet possut, päästäkää minut sisään, olen {shuffledAdj[22]}”, susi huhuili taas. ”Ei avata!”, kuului possujen {shuffledAdj[23]} vastaus. 
                  ”Ei, ei, kautta leukapartamme, emme aio päästää sisälle ketään!” Susi suuttui. 
                  ”Jos ette päästä minua sisään, minä uhkun ja puhkun ja puhallan risutalonne kumoon!”
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja koska talo oli tehty risuista, sekin meni helposti rikki. 
                  Mutta onneksi pikkupossut ehtivät pötkiä pakoon kolmannen possun taloon, eikä susi saanut niitä kiinni. Se jäi makaamaan risukasaan, ollessaan taas {shuffledAdj[24]}.
                </p>
                <p>
                  Mutta eipä aikaakaan, kun susi oli löytänyt kolmannenkin possun kodin ja tuli taas ovelle kolkuttelemaan. 
                  ”Pienet pienet possut, päästäkää minut sisään, lupaan olla {shuffledAdj[25]}”, huusi susi. Nyt se oli jo todella {shuffledAdj[26]}. 
                  ”Ei päästetä”, vastasivat pikkupossut yhteen ääneen. ”Ei, ei, kautta leukapartamme, emme aio päästää sisälle ketään!” 
                  Susi kimpaantui. ”Jos ette päästä minua sisään, minä uhkun ja puhkun ja puhallan tämänkin talon kumoon!”
                </p>
                <p>
                  Ja niin susi puhkui ja puhalsi. Ja puhalsi ja puhkui. Mutta tiilitalo ei hievahtanutkaan, ei vaikka susi kuinka yritti. 
                  Tämä talo oli näet rakennettu siten, että se oli {shuffledAdj[27]}. Silloin susi huomasi talon katolla savupiipun ja sanoi: 
                  ”Hah, minäpä kiipeän savupiippua pitkin sisään ja tulen syömään teidät!” Possut pelästyivät, mutta eivät sanoneet mitään.
                </p>
                <p>
                  Sen sijaan he sytyttivät tulen takkaan ja nostivat suuren padan tulelle. Vesi lämpeni nopeasti. 
                  Ja kun iso paha susi kiipesi savupiippua pitkin alas possujen tupaan, se molskahti suoraa päätä pataan, joka oli nyt {shuffledAdj[28]}. 
                  Susi kiljahti pelästyksestä ja juoksi matkoihinsa, eikä se enää ikinä tullut takaisin kiusaamaan possuja.
                </p>
                <p>
                  Ja niin kolme pientä possua, joista jokainen oli yhtä {shuffledAdj[29]}, elelivät tiilitalossaan elämänsä loppuun asti. 
                </p>
                <p>
                  Sen pituinen se.
                </p>
                <p><em>Tässä tarinassa on 29 adjektiivia</em></p>
              </div>
      case '2':
        return <div>
                <h1>Saapasjalkakissa</h1>
                <p>
                  Carabasin vuoristossa, kylässä, joka oli {shuffledAdj[0]} ja {shuffledAdj[1]}, asui kauan sitten eräs mylläri. 
                  Mylläri jauhoi viljoja myllyssään aasi apunaan. Hänellä oli kolme poikaa ja kotieläimenä {shuffledAdj[2]}, {shuffledAdj[3]} kissa. 
                  Kun mylläri sitten eräänä päivänä kuoli, hänen kolme poikaansa jakoivat omaisuuden keskenään. 
                  Vanhin poika otti itselleen tuulimyllyn ja keskimmäinen poika sai aasin. 
                  Niinpä nuorimmaiselle pojalle ei jäänyt mitään muuta kuin {shuffledAdj[4]} {shuffledAdj[5]} kissa.
                </p>
                <p>
                  ”Voi minua raukkaa”, harmitteli nuorin poika. ”Olen {shuffledAdj[6]}. Mitä ihmettä minä kissalla teen? 
                  Isoveljeni saavat elantonsa myllystä ja aasista, mutta miten minä nyt hankin ruokaa itselleni?” 
                  Mutta pojan kissapa ei ollutkaan mikään {shuffledAdj[7]} kotikissa. Se oli {shuffledAdj[8]} veijari. 
                  Kissa sanoi pojalle: ”Älä murehdi, isäntäni. Hommaa minulle säkki ja saapikkaat, niin näet vielä, mihin pystyn. Minä teen sinusta vielä tämän maan kuninkaan!”
                </p>
                <p>
                  Poika nauroi kissan puheille, hänhän oli aivan {shuffledAdj[9]}, mutta osti tälle kuitenkin viimeisillä rahoillaan säkin ja saappaat. 
                  Kissa heitti säkin reippaasti selkäänsä ja veti saapikkaat jalkaansa. Sitten se piilotti hiukan salaattia säkkiinsä ja lähti lintujahtiin. 
                  Eipä aikaakaan, kun se oli saanut houkuteltua säkkiinsä metsälintuja, joista jokainen oli {shuffledAdj[10]}.
                </p>
                <p>
                  Saapasjalkakissa marssi saaliinsa kanssa suoraan kuninkaan puheille. 
                  Kuninkaanlinnaan päästyään se kumarsi syvään ja sanoi: ”{shuffledAdj[11]} kuningas, tuon sinulle lahjaksi lintupaistia Carabasin maaherralta.” 
                  {shuffledAdj[12]} myllärinpoika ei tietenkään ollut mikään maaherra, mutta saapasjalkakissa arveli, että se kuulostaisi kuninkaan korvissa paremmalta. 
                  ”No johan nyt”, myhäili kuningas mielissään linnut nähtyään – lintupaisti oli näet kuninkaan lempiruokaa – 
                  ”kerrothan Carabasin maaherralle, että olen kovin ilahtunut lahjasta”. Sen jälkeen kuningas palkitsi kissan avokätisesti kultakolikoilla.
                </p>
                <p>
                  Kotiin päästyään kissa antoi kultakolikot hämmästyneelle isännälleen. Nyt poika oli vakuuttunut kissansa taidoista, tämähän oli yllättävän {shuffledAdj[13]}. 
                  Ja niin saapasjalkakissa jatkoi metsästyspuuhiaan. 
                  Joka päivä se toimitti isännälleen metsästä syötävää ja vei silloin tällöin lintupaistia myös linnaan kuninkaalle. 
                  Eräänä päivänä kuninkaanlinnassa vieraillessaan kissa kuuli, että kuninkaan tytär oli lähdössä retkelle läheisen joen rantaan. 
                  Valtakunnassa prinsessa tunnettiin tyttönä, joka oli {shuffledAdj[14]} ja {shuffledAdj[15]}.
                </p>
                <p>
                  Kissa riemastui uutisista ja keksi idean, joka oli {shuffledAdj[16]}. 
                  Nyt sen piti vain saattaa isäntä samaisen joen rantaan kohtaamaan prinsessa tämän retkipäivänä. 
                  Prinsessahan saattoi hyvällä tuurilla ihastua poikaan, tuumi saapasjalkakissa. Ainakin, jos hän hieman auttaisi asiaa. 
                  ”Kuulehan isäntä”, kissa selitti pojalle. ”Sinun onnesi saattaa olla {shuffledAdj[17]}, jos vain teet niin kuin sanon. 
                  Nyt mars matkaan prinsessaa tapaamaan!”
                </p>
                <p>
                  Saavuttuaan joenpenkalle kissa käski pojan riisuuntua ja mennä uimaan. Poika oli hämillään, mutta päätti totella kissaa. 
                  Vähän aikaa vedessä pulikoituaan poika kuuli kuninkaan vaunujen lähestyvän. Silloin kissa alkoi huutaa äänessään {shuffledAdj[18]} sävy: 
                  ”Apua, auttakaa! Carabasin maaherra hukkuu!”
                </p>
                <p>
                  Kuultuaan huudon kuningas pisti päänsä ulos vaunuista ja tunnisti saapasjalkakissan. 
                  Hän pyysi ajuriaan pysähtymään ja auttamaan veden varaan joutunutta maaherraa. 
                  Kun ajuri sai pojan vedettyä joesta ylös, kissa selitti kuninkaalle, että rosvo oli varastanut maaherran vaatteet ja tönäissyt tämän veteen. 
                  Tämä oli tietenkin {shuffledAdj[19]} valhe, sillä kissa oli itse piilottanut pojan vaatteet kiven taakse.
                </p>
                <p>
                  Mutta kuningas käski apulaisiaan vaatettamaan pojan, joka oli täysin {shuffledAdj[20]}, parhaimpiin vaatteisiinsa. 
                  Vaatteet päälle saatuaan poika olikin varsin {shuffledAdj[21]} näky. 
                  Niin {shuffledAdj[22]}, että vaunuista kurkistaessaan kuninkaan tytär vallan ihastui Carabasin maaherraan, 
                  vaikkei tietenkään tiennyt tämän olevan {shuffledAdj[23]} myllärinpoika. Kuningas kutsui pojan mukaansa vaunuajelulle.
                </p>
                <p>
                  Saapasjalkakissa oli mielissään, että suunnitelma prinsessan ja pojan yhteensaattamisesta sujui niin hyvin. 
                  Se päätti vielä juosta tietä pitkin vaunujen edellä ja pyysi pellolla ahertavia maanviljelijöitä tervehtimään vaunuissa kulkevaa myllärinpoikaa Carabasin maaherrana.
                </p>
                <p>
                  Kissa jatkoi matkaansa, ja saapui tietä pitkin linnaan, joka oli {shuffledAdj[24]}. 
                  Linna kuului velholle, jonka tiedettiin olevan {shuffledAdj[25]}. 
                  Kukaan ei koskaan uskaltautunut velhon puheille, mutta {shuffledAdj[26]} saapasjalkakissa päätti yrittää. 
                  Hän astui velhon eteen ja tokaisi: ”Sinua kutsutaan Carabasin mahtavimmaksi velhoksi. 
                  Mutta jos kerran olet niin {shuffledAdj[27]} taikomaan, osaatko muuttaa itsesi leijonaksi?”
                </p>
                <p>
                  ”Hah, tietenkin osaan!” huudahti velho ja taikoi itsensä siinä silmänräpäyksessä leijonaksi. 
                  Saapasjalkakissa nielaisi pelosta mutta ei hievahtanut paikaltaan. 
                  Ääni väristen se jatkoi: ”Hmm, on tosiaan helppoa muuttaa itsensä eläimeksi. 
                  Mutta jos kerran olet niin {shuffledAdj[28]} taikomaan, osaisitko muuttaa itsesi hiireksi?”
                </p>
                <p>
                  ”Hah, tietenkin osaan!” huudahti velho ja taikoi itsensä hiireksi, joka oli ihan {shuffledAdj[29]}. 
                  Siinä samassa saapasjalkakissa loikkasi hiiren perään ja pyydysti sen kynsiinsä. 
                  Yhdellä hotkaisulla kissa söi hiiren suuhunsa. Se oli velhon loppu. 
                  Nyt velhon {shuffledAdj[30]} linna oli tyhjillään, ja myllärinpoika voisi asettua sinne asumaan.
                </p>
                <p>
                  Sillä välin kuninkaan vaunut olivat saapuneet linnan kohdalle, jossa saapasjalkakissa oli saattuetta vastassa. 
                  ”Tervetuloa kotilinnaasi, Carabasin maaherra!”, kissa huusi. Kuningas katsoi poikaa ilmeellä, joka oli {shuffledAdj[31]}.
                  ”Sinulla on {shuffledAdj[32]} koti, {shuffledAdj[33]} herra!” Poika itse oli niin hämmästynyt, ettei saanut sanaa suustaan. 
                  Jotenkin {shuffledAdj[34]} kissa oli onnistunut tekemään myllärinpojasta linnaherran.
                </p>
                <p>
                  Myös prinsessa silmäili poikaa. Silloin saapasjalkakissa kuiskasi, että tämä olisi hyvä hetki pyytää kuninkaan tytärtä puolisoksi. 
                  Niinpä poika karautti kurkkuaan ja kysyi prinsessalta, haluaisiko tämä muuttaa pojan luokse linnaan asumaan. Prinsessa suostui ilomielin.
                </p>
                <p>
                  Pian vietettiinkin jo pariskunnan häitä. Eräänä päivänä prinsessan isä, {shuffledAdj[35]} kuningas, päätti jäädä eläkkeelle. 
                  Silloin prinsessa peri isänsä kruunun, ja pojasta tuli hänen puolisonaan valtakunnan uusi hallitsija – ja saapasjalkakissasta kuninkaan {shuffledAdj[36]} neuvonantaja.
                </p>
                <p>
                  Sen pituinen se.
                </p>
                <p><em>Tässä tarinassa on 36 adjektiivia</em></p>
              </div>
      case '3':
        return <div>
                <h1>Pieni Punahilkka</h1>
                <p>
                  Olipa kerran {shuffledAdj[0]} ja {shuffledAdj[1]} {shuffledAdj[2]} tyttö, josta kaikki pitivät. 
                  Erityisen paljon häntä rakasti hänen {shuffledAdj[3]} isoäitinsä, joka oli kutonut tytölle hupullisen viitan, joka oli {shuffledAdj[4]}. 
                  Tyttö käytti sitä aina, ja sen vuoksi hänen lempinimekseen tuli {shuffledAdj[5]} Punahilkka.
                </p>
                <p>
                  Eräänä aamuna Punahilkan {shuffledAdj[6]} äiti kutsui Punahilkan luokseen keittiöön ja sanoi: 
                  ”Isoäitisi on hyvin {shuffledAdj[7]}. Ota tästä kakkua ja viiniä ja vie ne hänelle, jotta hän tervehtyisi, mutta muista, 
                  ettet saa poiketa polulta, sillä metsä on hyvin {shuffledAdj[8]}!” 
                  Punahilkka lupasi, ettei hän poikkeaisi polulta ja hänen äitinsä pakkasi kakun ja viinin pajukoriin. 
                  {shuffledAdj[9]} punahilkka, yllään {shuffledAdj[10]} viittansa, nosti korin käsivarrelleen ja lähti kohti isoäidin mökkiä.
                </p>
                <p>
                  Isoäidin {shuffledAdj[11]} mökki oli naapurikylässä. Polku isoäidin mökille kulki metsän halki. 
                  Matka taittui joutuisasti ja aurinko paistoi polulle suurten puiden oksien lomasta. 
                  Äkkiä metsästä astui polulle {shuffledAdj[12]} {shuffledAdj[13]} Susi.
                </p>
                  – Hyvää päivää, {shuffledAdj[14]} Punahilkka, minne matka? Susi kysyi. ​
                <p>
                  – Hyvää päivää! Olen viemässä kakkua ja viiniä isoäidilleni, joka on {shuffledAdj[15]}, jotta hän vahvistuisi ja tervehtyisi, Punahilkka vastasi.​
                </p>
                <p>
                  Punahilkka ei ollut koskaan aikaisemmin nähnyt sutta, joten häntä ei pelottanut. 
                  Susi taas oli hyvin, hyvin {shuffledAdj[16]}, sillä se ei ollut syönyt mitään kolmeen päivään. 
                  ”Jos nyt olen {shuffledAdj[17]}, saan syödä sekä isoäidin että Punahilkan”, ajatteli susi, ja lipoi kieltään.
                </p>
                <p>
                  – Isoäitisi ilahtuu varmasti, kun hän saa kakkua ja viiniä, mutta eikö hän ilahtuisi vielä enemmän, jos sinulla olisi mukanasi {shuffledAdj[18]} kukkakimppu? 
                  Katsohan: tuossa polun laidassa kasvaa kukkia, joista jokainen on yhtä {shuffledAdj[19]}, susi sanoi.
                </p>
                <p>
                  Punahilkka muisti kyllä, mitä hänen äitinsä oli sanonut, 
                  mutta polun laidassa kasvoi metsäorvokkeja ja vähän matkan päässä puiden alla kieloja ja aukiolla vielä taivaansinisiä lemmikkejäkin. 
                  Punahilkka laski korin maahan ja taittoi orvokin, sitten toisen ja vielä kolmannenkin. Pian Punahilkka oli unohtanut äitinsä varoitukset.
                </p>
                <p>
                  Susi sen sijaan juoksi metsään ja suoraan isoäidin mökille ja koputti oveen, kop kop.
                </p>
                <p>
                  – Kuka siellä? huusi isoäiti.​
                </p>
                <p>
                  – Minä täällä, {shuffledAdj[20]} Punahilkka, toin sinulle kakkua ja viiniä, jotta vahvistuisit ja olisit taas {shuffledAdj[21]}, kimitti susi Punahilkaksi tekeytyen. ​
                </p>
                <p>
                  – Tule vain sisään, olen liian {shuffledAdj[22]} noustakseni vuoteesta. Ovi ei ole säpissä, isoäiti kehotti. 
                  Susi loikki suoraan isoäidin vuoteen ääreen ja syödä hotkaisi isoäidin suihinsa. 
                  Sitten se pukeutui isoäidin yömyssyyn ja aamutakkiin ja kävi vuoteeseen peiton alle odottamaan Punahilkkaa.
                </p>
                <p>
                  Sillä välin Punahilkka oli poiminut kukkakimpun, joka oli {shuffledAdj[23]}. 
                  Hän huomasi, että aurinko oli jo korkealla, joten hän kiireen vilkkaa palasi polulle, nosti korin käsivarrelleen. 
                  Punahilkka kiirehti juoksujalkaa isoäidin mökille ja koputti oveen, kop kop.
                </p>
                <p>
                  – Kuka siellä? huusi isoäidin ääntä matkiva susi.​
                </p>
                <p>
                  – Minä täällä, {shuffledAdj[24]} Punahilkka, toin sinulle kakkua ja viiniä, jotta vahvistuisit ja olisit taas {shuffledAdj[25]}, vastasi Punahilkka. ​
                </p>
                <p>
                  – Tule vain sisään, olen liian {shuffledAdj[26]} noustakseni vuoteesta. Ovi ei ole säpissä, susi kehotti. 
                  Punahilkka astui mökkiin ja kävi isoäidin vuoteen vierelle. ​
                </p>
                <p>
                  – Tule tänne viereeni, susi kehotti. Punahilkka nosti korin ja kukat pöydälle, kohotti tilkkutäkkiä ja nousi isoäidin sängylle. 
                  Isoäiti oli kovin {shuffledAdj[27]} yöpaidassaan. 
                </p>
                <p>
                  – Miksi jalkasi on noin {shuffledAdj[28]}? Punahilkka kysyi.​
                </p>
                <p>
                  – Jotta voisin juosta kovempaa, vastasi susi.​
                </p>
                <p>
                  – Miksi kätesi on noin {shuffledAdj[29]}? Punahilkka kysyi.​
                </p>
                <p>
                  – Jota voisin halata sinua paremmin, vastasi susi.​
                </p>
                <p>
                  – Miksi korvasi on noin {shuffledAdj[30]}? Punahilkka kysyi.
                </p>
                <p>
                  – Jotta voisin kuulla sinut paremmin, vastasi susi.​​
                </p>
                <p>
                  – Miksi sinulla on noin {shuffledAdj[31]} suu? Punahilkka kysyi.
                </p>
                <p>
                  – Jotta voisin SYÖDÄ sinut paremmin, susi vastasi, syödä hotkaisi punahilkan yhtenä suupalana ja kävi nukkumaan ruokalevolle.
                </p>
                <p>
                  Ohi kulkeva {shuffledAdj[32]} metsänvartija kuuli suden kuorsauksen ja mietti huolestuneena, mikä isoäitiä vaivasi, kun hän noin kuorsasi. 
                  Hän koputti oveen kop kop, mutta kukaan ei vastannut. Isoäidin ovi ei ollut säpissä. 
                  Metsänvartija astui hiljaa sisään ja löysi unessa kuorsaavan suden isoäidin sängystä.
                </p>
                <p>
                  Metsänvartija arvasi heti, mitä oli tapahtunut. Hän otti vyöltään puukon ja leikkasi suden vatsan auki, ja voi ihmettä! 
                  Punahilkka ja isoäiti kömpivät esiin suden vatsasta vahingoittumattomina! He syleilivät toisiaan ja metsänvartijaa. 
                  Sillä välin, kun isoäiti nautti kakkua, joka oli vielä {shuffledAdj[33]}, ja viiniä, metsänvartija ja Punahilkka täyttivät suden vatsan kivillä, 
                  ompelivat sen kiinni ja veivät suden takaisin metsään.
                </p>
                <p>
                  Siitä päivästä lähtien susi ei koskaan enää vaaninut ketään metsäpolulla. 
                  Isoäiti vahvistui ja oli taas {shuffledAdj[34]}, ja {shuffledAdj[35]} Punahilkka kuunteli siitä lähtien äitinsä ohjeet, eikä enää koskaan poikennut polulta. ​
                </p>
                <p>
                  Sen pituinen se.
                </p>
                <p><p><em>Tässä tarinassa on 35 adjektiivia</em></p></p>
              </div>
      default:
        return 'Error.'
    }
  }

  return (
    <>
      <div className='content'>
        <SwitchStory page={id}/>
        <form noValidate onSubmit={handleSubmit}>
          <textarea 
            type='text' 
            id='data' 
            placeholder='Lisää adjektiiveja' 
            value={textarea} 
            onChange={handleChange} />
          <button type='submit'>Lisää</button>
          <p>Adjektiiveja lisätty {count}</p>
        </form>
      </div>
    </>
  )
}

export default Stories
