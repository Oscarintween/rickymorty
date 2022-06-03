import React, { useEffect, useState } from 'react'
import Busqueda from './Busqueda'
import TraerDatos from './TraerDatos'


const Home = () => {
    const [personajes,setPersonajes]= useState([])
    const [valueInput,setValueInput]=useState('')
    
    const datos = TraerDatos(valueInput)
    const getPersonajes = ()=>{
        datos.then(setPersonajes)
    }

    useEffect(() =>{
        getPersonajes()
    },[])

    
  return (
    <div>
        <div>
            <Busqueda bolsa={setValueInput}/>
            <h3>{valueInput}</h3>
        </div>
        <div>
            {
                personajes.map(personaje=>(
                <>
                <h2>{personaje.name}</h2>
                <img key={personaje.id} src={personaje.image} />
                <p>{personaje.status}</p>
                </>
               
                
                ))
            }

        </div>
    </div>
  )
}

export default Home