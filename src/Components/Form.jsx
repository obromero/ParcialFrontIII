import './Form.css'
const Form = ({setNombre, setCiudad, handleSubmit}) => {
  return (

          <form className='formBody' onSubmit={handleSubmit}>
              <label >Ingresa tu nombre</label>
              <input className='input' type="text" onBlur={(e) => setNombre((prevState) => ({...prevState, nombre: e.target.value}))}/>
              

              <label >Ingresa tu ciudad favorita</label>
              <input type="text" onBlur={(e) => setCiudad((prevState) => ({...prevState, nombreC: e.target.value}))}/>


            <button className="boton">Enviar</button>
          </form>
        )
}

export default Form