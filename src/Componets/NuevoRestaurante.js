import React, { useState } from 'react'
import { Listar } from '../data-producto'
import swal from 'sweetalert2';




export const NuevoRestaurante = () => {

  const [formulario, setValoresFormulario] = useState({});
  let { nombre = '', descripcion = '', direccion = '', url = '' } = formulario;

  // permite asignar los valores del formulario a la variable de estado  formValues
  const handleOnChange = (e) => {
    setValoresFormulario({ ...formulario, [e.target.name]: e.target.value });

  }
  const mensaje = () => {
    swal.fire(
      'Mensaje exitoso',
      'Datos Guardados correctamente ',
      'success'
    )
  }
  // pinta los valores del formulario cuando presionan el boton
  const handleOnSubmit = (e) => {
    e.preventDefault(); // evita que se recargue el formulario
    Listar.push(formulario);
    mensaje();
    console.log(formulario);
 

    setValoresFormulario(nombre = "", descripcion = "", direccion = "", url = "");
  }

  return (

    <div className="container-fluid mt-3 ancho">



      <form onSubmit={(e) => handleOnSubmit(e)} autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Nombre Restaurante</label>
          <input required type="text" name="nombre" value={nombre}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input required type="text" name="descripcion" value={descripcion}
            className="form-control" onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input required type="text" className="form-control" name='direccion'
            value={direccion} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Url image</label>
          <input required type="Url" className="form-control" name='url'
            value={url} onChange={(e) => { handleOnChange(e) }} />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary form-control">Guardar</button>
        </div>
      </form>
    </div>

  )
}
