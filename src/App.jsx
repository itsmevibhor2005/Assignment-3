import { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'
import Image from './components/Image'
import Stats from './components/Stats'


function App() {

  const [hero, setHero] = useState({name: ''})
  const [stats, setstats] = useState(null)
  const [image, setImage] = useState({url:""})
  const [name, setName] = useState()
  const [appearance, setAppearance] = useState({gender: "", race:"", height: "", weight: "", "eye-color": "", "hair-color": ""})
  const [connections, setConnections] = useState({"group-affiliation": "", relatives: ""})
  const [biography, setBiography] = useState({"full-name": "", "alter-egos": "", aliases: "", "place-of-birth": "", "first-appearance": "", publisher: "", alignment: ""})
  const [power, setpower] = useState({intelligence: "", strength: "", speed: "", durability: "", power: "", combat: ""})
  const [work, setwork] = useState({occupation: "", base: ""})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero({ ...hero, [name]: value });
  }

  const handleClick = async() =>{
    const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/c711e9a1fe52ef88f93f509e74f68997/getByName/${hero.name}`)
      console.log(response.data.results[0])
      setstats(response.data.results[0])
      setName(response.data.results[0].name)
      setImage(response.data.results[0].image)
      setAppearance(response.data.results[0].appearance)
      setConnections(response.data.results[0].connections)
      setBiography(response.data.results[0].biography)
      setpower(response.data.results[0].powerstats)
      setwork(response.data.results[0].work)

  }

  const handleKeyPressed = async (e) => {
    if(e.key === 'Enter'){
      const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/c711e9a1fe52ef88f93f509e74f68997/getByName/${hero.name}`)
      console.log(response.data.results[0])
      setstats(response.data.results[0])
      setName(response.data.results[0].name)
      setImage(response.data.results[0].image)
      setAppearance(response.data.results[0].appearance)
      setConnections(response.data.results[0].connections)
      setBiography(response.data.results[0].biography)
      setpower(response.data.results[0].powerstats)
      setwork(response.data.results[0].work)
    }
  }

  const randomClick = async() =>{
    let id = Math.floor(Math.random() * 731)
    const response = await axios.get(`https://cors-proxy-superhero-api.onrender.com/c711e9a1fe52ef88f93f509e74f68997/getById/${id}`)
    console.log(response.data)
      setstats(response.data)
      setName(response.data.name)
      setImage(response.data.image)
      setAppearance(response.data.appearance)
      setConnections(response.data.connections)
      setBiography(response.data.biography)
      setpower(response.data.powerstats)
      setwork(response.data.work)

  }
  return (
   
    <div className='bg-gradient-to-b from-[#c0b8e8] to-[#857bdb] min-w-[100vw] min-h-[100vh] flex flex-col items-center gap-5'>
      <div className='flex gap-5 my-4'>
        <input type="text" placeholder='Search Name' name='name' value={hero.name} id='name' onChange={handleChange} onKeyDown={handleKeyPressed} className='w-[200px] h-[40px] p-3'/>
        <button type='submit' onClick={handleClick} className='bg-green-500 w-[100px] h-[40px] border-black border hover:bg-green-600 transition-all'>Search</button>
      </div>

      <button onClick={randomClick} className='bg-red-400 h-[45px] p-3 border border-black hover:bg-red-500 hover:text-white transition-all'>Click to see random Superhero Stats</button>
      {stats? <>
      
      <Image src={image}/><Stats name={name} appearance={appearance} 
      connections={connections} biography={biography} power={power} work={work}
      /> </>: (<div>Search a superhero</div>)}
      
    </div>
    
  )
}

export default App
