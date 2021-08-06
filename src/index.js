import React from 'react';
import ReactDOM from 'react-dom';

function formatarNome(usuarios){
    return usuarios.firsName + ' ' + usuarios.lastName + '- idade ' + usuarios.idade;
}

const usuarios={
    firsName: 'Rafao',
    lastName: 'React',
    idade: '32'
};

const element = (<h1>Hello, {formatarNome(usuarios)}</h1>)

ReactDOM.render(element ,document.getElementById('root')
);

