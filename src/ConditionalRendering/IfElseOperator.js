function IfElseOperator() {
    const user = {
        name: 'John Doe',
        isLoggedIn: true
    };

    let message;
    if (user.isLoggedIn) {
        message = <h2>Welcome back, {user.name}!</h2>;
    } else {
        message = <h2>Please log in.</h2>;
    }

    return (
        <div>
            <h1>Welcome to our website!</h1>
            {message}
        </div>
    );
}

export default IfElseOperator;
