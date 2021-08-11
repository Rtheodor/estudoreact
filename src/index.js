import React from 'react';
import ReactDOM from 'react-dom';

/*function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}*/
/*class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
                
    }
}*/

class Programador extends React.Component{
    render(){
        return <h1>Hello, {this.props.mundo}</h1>
                
    }
}
/*
const element = <Welcome name="Rafao"/>;*/
const teste = <Programador mundo="Aprendendo a ser um programador"/>

ReactDOM.render(teste ,document.getElementById('root'));




