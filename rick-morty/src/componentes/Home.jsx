import React, { useEffect, useState } from 'react'
import Busqueda from './Busqueda'
import TraerDatos from './TraerDatos'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navigation from './Navigation';
import '../index.css'


const Home = () => {
    const [personajes,setPersonajes]= useState([])
    const [valueInput,setValueInput]=useState('')
    
    const datos = TraerDatos(valueInput)
    const getPersonajes = ()=>{
        datos.then(setPersonajes)
        .then(()=>console.log('---->',personajes))     
    }

    useEffect(() =>{
        getPersonajes()
    },[valueInput])

    
  return (
    <div>
        <Navigation />
        <div align="center">
        <Busqueda bolsa={setValueInput}/>
        <h1>{valueInput.toUpperCase()}</h1>
        </div>
    <Box sx={{ width: 'auto', height: 'auto' }}>
        <ImageList variant="masonry" cols={5} gap={8}>
            {personajes.map((item) => (
                <ImageListItem id="cardPrincipal"key={item.id}>
                    <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar position="below" align="center" title={item.name} />
                </ImageListItem>
            ))}
        </ImageList>
        </Box>
    </div>
  )
}

export default Home