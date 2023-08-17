import React, { useState } from "react";
import { FormComponent } from "./FormComponent";

export const CardComponent = () => {
  const [formValue, setFormValue] = useState([]);
  const [error, setErrors] = useState(false)


  const onInputValue = (inputValue) => {
    const hasDuplicateEmail = formValue.some((formValue) => formValue.email === inputValue.email);
    !hasDuplicateEmail ? setFormValue([...formValue, inputValue]) : setErrors(!error);  
  };

  return (
    <div>
      <FormComponent onInputValue={onInputValue} />
      <h2 className={ `${ error ? 'active' : 'disable' }`} >El email ingresado ya existe en la base de datos</h2>
      <h1>Clients</h1>
      <div id="clientsConteiner">
        <div>
          <h2>Nombre</h2>
          {formValue.map((value) => (
            <li key={value.email}>{value.nombre}</li>
          ))}
        </div>
        <div>
          <h2>Apellido</h2>
          {formValue.map((value) => (
            <li key={value.email}>{value.apellido}</li>
          ))}
        </div>
        <div>
          <h2>Email</h2>
          {formValue.map((value) => (
            <li key={value.email}>{value.email}</li>
          ))}
        </div>
        <div>
          <h2>Telefono</h2>
          {formValue.map((value) => (
            <li key={value.email}>{value.telefono}</li>
          ))}
        </div>
      </div>
    </div>
  );
};
