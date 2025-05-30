function AmpercendOperator() {
    const isLoggedIn = true;
    return (
        <div>
            <h1>Welcome to our website!</h1>
            {isLoggedIn && <h2>You are logged in.</h2>}
        </div>
    );
}

export default AmpercendOperator ;
