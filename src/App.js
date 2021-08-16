import React from 'react';

class App extends React.Component {
    render() {
        return (
            <NumberList numbers = {numbers}/>
        );
    }
}

function NumberList(props){
    const numbers = props.numbers;
    const listItens = numbers.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{listItens}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default App;