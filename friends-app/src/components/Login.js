import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log ("these are the login:post res: ", res);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch(err => console.log ("ERROR: ", err.message)
            );
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder="Password"
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }

}

export default Login;