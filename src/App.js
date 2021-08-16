import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Greeting isLoggedIn={false} />
        )
    }
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function UserGreeting(props) {
    return <h1>Welcome</h1>

}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>
}

export default App;