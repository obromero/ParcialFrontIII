import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [nom, setNombre] = useState({
    nombre: '',
  })

  const [ciud, setCiudad] = useState({
    nombreC: '',
  })


  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(nom.nombre.length > 3 || ciud.nombreC.length>3){
      setError(true)
    }else alert('Por Favor verifica la informacion')
   }

  return (
    <>
      <Form handleSubmit={handleSubmit}  
      setNombre={setNombre} 
      setCiudad={setCiudad}
      />
      
      {error && <Card nom={nom} ciud={ciud}/>}
    </>
  )
}

export default App