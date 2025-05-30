import React from 'react';
import PropTypes from 'prop-types';

class PropCheck extends React.Component {
    render() {
        return <h1>{this.props.greeting}</h1>;
    }
}

PropCheck.defaultProps = {
    greeting: "These is PropCheck in react"
};

PropCheck.propTypes = {
    greeting: PropTypes.string
};

export default PropCheck;

// Prop Types: PropTypes is a way to ensure that components receive the right type of props.
// It will check the props passed to your components against a specification you set
// and warn in development if they don’t match.

// propTypes in React is a mechanism for typechecking the props that a React component receives. It allows developers to specify the expected data types for the props passed to a component, which can help catch bugs and prevent issues related to incorrect prop types during development. Here’s a brief overview:

