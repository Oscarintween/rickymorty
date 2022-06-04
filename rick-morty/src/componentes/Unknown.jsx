import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
import '../index.css'

const Unknown = () => {
   const getUnknown= async()=>{
    const urlUnknown ='https://rickandmortyapi.com/api/character/?status=unknown'
    const data = await axios.get(urlUnknown)
    const unknownCharacters = data.data.results
    return unknownCharacters
   } 
   const [unknown,setUnknown] = useState([])
   const datos = getUnknown()
    const getPersonajes = ()=>{
        datos.then(setUnknown)
        .then(()=>console.log('---->',unknown))     
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
    <h1 align="center">Personajes que no se sabe si viven o mueren</h1>
    <h3>Haz click para ver mas personajes</h3>
    <button onClick={(e)=>manejoClick(e)}>Ver Mas</button>
      
    <Box sx={{ width: 'auto', height: 'auto' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
            {unknown.map((item) => (
                <ImageListItem id="cardUnknown" key={item.id}>
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

export default Unknown