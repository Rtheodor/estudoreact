import React from 'react';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = ({date: new Date()})
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>this.tick(),
        1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState ({
            date: new Date()
        })
    }


    render(){
      return(
        <div> <h1>Hora atual</h1>
        <h2>{this.state.date.toLocaleDateString()}</h2>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        );   
    };
}

export default App;