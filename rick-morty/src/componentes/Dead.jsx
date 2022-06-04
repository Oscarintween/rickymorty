import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
import '../index.css'

const Dead = () => {
   const getDead= async()=>{
    const urlDead ='https://rickandmortyapi.com/api/character/?status=dead'
    const data = await axios.get(urlDead)
    const deadCharacters = data.data.results
    return deadCharacters
   } 
   const [dead,setDead] = useState([])
   const datos = getDead()
    const getPersonajes = ()=>{
        datos.then(setDead)
        .then(()=>console.log('---->',dead))     
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
    <h1 align="center">Personajes que estan muertos</h1>
    <h3>Haz click para ver mas personajes muertos</h3>
    <Button size="small" color="secondary" variant="contained" onClick={(e)=>manejoClick(e)}>Ver Mas</Button>
      
    <Box sx={{ width: 'auto', height: 'auto' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
            {dead.map((item) => (
                <ImageListItem id="cardMuertos" key={item.id}>
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

export default Dead