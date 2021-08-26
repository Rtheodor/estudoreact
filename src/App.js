import React from 'react';
import useForm from './useForm';

function App(){
    const [{values}, handleChange, handleSubmit] = useForm();
   
    const enviarUsuario=()=>{
        alert(`${values.name}`);
    }

    return(
    <div>
        <h1>Cadastro</h1>
        <p>Nome: {values.name}</p>
        <p>E-mail: {values.email}</p>
        <form onSubmit={handleSubmit(enviarUsuario)}> 
            <label className='nomeTitulo'>Nome: </label>
            <input onChange={handleChange} type="text" name="name" placeholder="Digite o nome completo" /><br/><br/>

            <label>E-mail: </label>
            <input onChange={handleChange} type="text" name="email" placeholder="Digite o E-mail completo" /><br/><br/>

            <button type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default App;