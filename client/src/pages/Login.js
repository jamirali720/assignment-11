import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {        
        email: '',
        password: '',      
        error: {}
    }
    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();

    }
    render() {
        let { email, password,  error} = this.state;
        return (
            <div className ="row container">
              <div className="col-md-6 offset-md-3">
                  <h1 className='text-center display-4'> Login here</h1>
                  <form onSubmit={this.submitHandler}>                     
                      
                    <div className="form-group"> 
                    <label htmlFor="email"> Email : </label>
                        <input 
                        className ="form-control"
                        type="email" 
                        name= "email"
                        id="email"
                        value={email}
                        placeholder="Enter Your Email"
                        onChange={this.changeHandler}
                        />
                    </div>  
                      
                    <div className="form-group"> 
                    <label htmlFor="password"> Password : </label>
                        <input 
                        className ="form-control"
                        type="password" 
                        name= "password"
                        id="password"
                        value={password}
                        placeholder="Enter Your Password"
                        onChange={this.changeHandler}
                        />
                    </div>  
                <div> 
                <Link to="/register"> Don't have an account? <span className="text-success"> Register </span> </Link>
                  <button type="submit"  className="btn btn-primary my-3 d-block">Login</button>
                </div>
                      
                    </form>

              </div>
                
            </div>
        );
    }
}

export default Login;