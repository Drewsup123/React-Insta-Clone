import React from 'react';

// const Login = props => {
//     return ( 
//         <div className="login-container">
//             <h1>Please Login to See Posts:</h1>
//             <form>
//                 <input type="text" placeholder="Username:" />
//                 <input type="password" placeholder="Password:" />
//                 <input type="submit">Login</input>
//             </form>

//         </div>
//     );
// }

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
        }
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleLoginSubmit = event => {
        const user = this.state.username;
        const pass = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', pass);//I feel like we would never do this 
    };
    render() { 
        return ( 
            <div className="login-container">
                <h1>Please Login to See Posts:</h1>
                <form>
                    <input type="text" placeholder="Username:" />
                    <input type="password" placeholder="Password:" />
                    <input type="submit">Login</input>
                </form>

            </div>
        );
    }
}

export default Login;