import React from "react";

function TernaryOperator() {
    const isLogged = true;
    return (
        <>
            <h4>welcome to ternary operator , conditonal rendering </h4>
            {isLogged ? (
                <p>you are logged in</p>
            ) : (
                <p>please log in to accessmore features</p>
            )}
        </>
    )
}

export default TernaryOperator;



