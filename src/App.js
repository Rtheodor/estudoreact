import React, { useState} from 'react';

function App(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");

const handleChange =(event)=>{
    setName(event.target.value);
}
/*const handleChangeEmail =(event)=>{
    setEmail(event.target.value);
}*/

    return(
        <div>
            <p>Nice!, <strong>{name}</strong> , O seu email é <strong>{email}</strong></p>
            <form>
                <labe> Nome: </labe>
                <input type="text" onChange={handleChange} /> <br /><br />
            
                <label>E-mail</label>
                <input type="text" onChange={event => setEmail(event.target.value)} /> <br /><br />
            
            </form>
        </div>
    )
}

export default App;