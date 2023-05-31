import './Card.css'


const Card = (nombre,nombreC) => {
  return (
    <>
  <div className='card'>
        <h2>Hola{nombre.nombre}</h2>
        <h3>Sabemos que tu ciudad favorita es{nombreC.nombreC}</h3>
      </div>
    </>
    
  )
}


export default Card