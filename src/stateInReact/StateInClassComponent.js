import React from "react";

class StateInClassComponent extends React.Component{
    state ={
        counter:0
    }
    render(){
        return(
            <>
            <h1>State in class component : {this.state.counter}</h1>
            <button onClick={ () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }}>INCREMENT</button>
            <button onClick={ () => {
                this.setState({
                    counter: this.state.counter - 1
                })
            }}>DECREMENT</button>
            </>
        )
    }
}

export default StateInClassComponent;

