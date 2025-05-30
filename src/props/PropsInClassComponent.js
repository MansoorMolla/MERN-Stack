import React from "react";

class PropsInCC extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.message1}</h1>
                <h1>{this.props.message2}</h1>
            </>
        )
    }
}

export default PropsInCC;

