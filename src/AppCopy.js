/*import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: '', email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handSubmit = this.handSubmit.bind(this);
    }

    handleChange(event){
        this.setState({nome: event.target.value});
    }

    handleChangeEmail (event){
        this.setState({email: event.target.value});
    }
    
    handSubmit(event){
        alert('Olá,' + this.state.nome + ' seu email é ' + this.state.email);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <p>Salve {this.state.nome}, o seu email é {this.state.email}</p>
            <form onSubmit={this.handSubmit}>
                <label> Nome </label>
                <input type="text" name="nome" onChange={this.handleChange} /><br />< br />
                <label> Email </label>
                <input type="text" name="email" onChange={this.handleChangeEmail} /><br />
                <input type="submit" value="Enviar"/>
            </form>
            </div>
        );
    }
}
export default App;*/