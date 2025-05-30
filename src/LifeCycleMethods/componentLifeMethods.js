import React from "react";


class ClassComponentLCM extends React.Component {
    constructor() {
        super();
        this.state = {
            x:10
        }
    }
    render() {
        return (
            <>
                <h1>Hi, these is for ClassComponent Life cycle method</h1>
                <h2>the value of x is {this.state.x}</h2>
                <button onClick={ () => {
                    this.setState({
                        x: this.state.x+10
                    })
                }}>Update x value</button>
            </>
        )
    }
}

export default ClassComponentLCM;