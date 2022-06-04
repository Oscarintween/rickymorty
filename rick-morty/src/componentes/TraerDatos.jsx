import React from 'react'
import axios from 'axios'

const TraerDatos =async(input) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${input}`
    const datos = await axios.get(url)
    const personajes = datos.data.results
    
    return personajes
    
}

export default TraerDatos