import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { botao: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            botao: !state.botao
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.botao ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default App;