import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
import '../index.css'

const Alive = () => {
   const getAlive= async()=>{
    const urlAlive ='https://rickandmortyapi.com/api/character/?status=alive'
    const data = await axios.get(urlAlive)
    const aliveCharacters = data.data.results
    return aliveCharacters
   } 
   const [alive,setAlive] = useState([])
   const datos = getAlive()
    const getPersonajes = ()=>{
        datos.then(setAlive)
        .then(()=>console.log('---->',alive))     
    }

    useEffect(() =>{
        getPersonajes()
    },[])
    const manejoClick = (evento) =>{
        evento.preventDefault()
        getPersonajes()
    }
  return (
    <>
    <Navigation />
    <h1 align="center">Personajes que estan vivos</h1>
    <h3>Haz click para ver mas personajes vivos</h3>
    <button onClick={(e)=>manejoClick(e)}>Ver Mas</button>
      
    <Box sx={{ width: 'auto', height: 'auto' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
            {alive.map((item) => (
                <ImageListItem id="cardVivos" key={item.id}>
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <p align="center">Status:{item.status}</p>
                    <ImageListItemBar position="below" align="center" title={item.name} />
                </ImageListItem>
            ))}
        </ImageList>
        </Box>
    </>
  )
}

export default Alive