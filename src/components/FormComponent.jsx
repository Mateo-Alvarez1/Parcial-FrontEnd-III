import React, { useState } from "react";

export const FormComponent = ( { onInputValue } ) => {

        const [formState, setFormState] = useState({
            nombre:'',
            apellido:'',
            email:'',
            telefono:''
        })

        
        const onInputChange = ( { target } ) => {
            const { name , value } = target;
            setFormState({
                ...formState,
                [name]:value
            })
        }

        const onFormSubmit = ( e ) => {
            e.preventDefault();
            const newNameValue= formState.nombre.trim();
            const newPhoneValue= formState.telefono.trim();
            if(newNameValue.length < 3 ){
                alert("El nombre debe tener al menos tres caracteres")
                return;
            }
            if(newPhoneValue.length < 6 ) {
                alert("El telefono debe tener al menos 6 caracteres")
                return;
            }
            onInputValue(formState)
        }



  return (
    <>
      <form id="formContainer" onSubmit={ onFormSubmit }>
        <label htmlFor="nombre">Nombre</label>
        <input 
        id="nombre" 
        type="text" 
        placeholder="Nombre"
        name="nombre"
        onChange={onInputChange}
        />

        <label htmlFor="apellido">Apellido</label>
        <input 
        id="apellido" 
        type="text" 
        placeholder="Apellido"
        name="apellido"
        onChange={onInputChange}
        />
      
        <label htmlFor="correo">Correo</label>
        <input 
        id="correo"
         type="email"
         placeholder="correo@gmail.com"
         name="email"
         onChange={onInputChange}
          />

        <label htmlFor="telefono">Telefono</label>
        <input 
        id="telefono"
         type="text" 
         placeholder="telefono"
         name="telefono"
         onChange={onInputChange}
         />

        <button type="submit">Guardar Usuario</button>
      </form>
    </>
  );
};
