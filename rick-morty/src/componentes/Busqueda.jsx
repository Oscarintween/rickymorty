import React, { useState } from 'react'
import '../index.css'

const Busqueda = ({bolsa}) => {

    const [valorInput, setValorInput] = useState('')

    const manejoClick = (evento) =>{
        bolsa(valorInput)
    }

  return (
    <div>
        <div><h2>Rick y Morty</h2></div> 
        <form action="">
            <input 
            type="text"
            placeholder='Buscar'
            value={valorInput}
            onChange={(ev)=>setValorInput(ev.target.value)} />
            <button onClick={(e)=>manejoClick(e)}>
                Buscar
            </button>
        </form>

    </div>
  )
}

export default Busqueda