import React, { useState} from 'react'
import '../index.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Busqueda = ({bolsa}) => {

    const [valorInput, setValorInput] = useState('')

    const manejoClick = (evento) =>{
        evento.preventDefault()
        bolsa(valorInput)
    }
    

  return (
    <div>
        <div><h1 id='title'>Rick and Morty</h1></div> 
        <form onSubmit={(e)=>manejoClick(e)}>
        <TextField 
        label="RICK AND MORTY" 
        size='small'
        color="secondary" focused 
        type="text"
        placeholder='Buscar'
        value={valorInput}
        onChange={(ev)=>setValorInput(ev.target.value)} 
        />
        <Button size="large" color="secondary" variant="contained" onClick={(e)=>manejoClick(e)}>
                Buscar
        </Button>
        </form>

    </div>
  )
}

export default Busqueda