import React from "react";

class DefaultProp extends React.Component {
    render() {
        return <h1>{this.props.greeting}</h1>;
    }
}

DefaultProp.defaultProps = {
    greeting: "These is default props in react"
};

export default DefaultProp;

// Default Props: Default props allow you to define default values for your props. 
// If a value for a prop is not provided, it will fall back to the default value.
// Bind the defaultProps to child component instance