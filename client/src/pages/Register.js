import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect}  from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends Component {
    state = {
        name : '', 
        email: '',
        password: '',
        confirmedPassword: '',
        error: {}
    }
    static getDerivedStateFromProps (nextProps, prevState){
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)){
            return {
                error: nextProps.auth.error
            }
        }        
        
        return null;
    }  
     
    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
            
     
    }
    submitHandler = event => {
        event.preventDefault();
        let {name, email, password, confirmedPassword} = this.state;
        this.props.register({name, email, password, confirmedPassword})

    }
    render() {
        let {name, email, password, confirmedPassword, error} = this.state;
        return (
            <div className ="row container">
              <div className="col-md-6 offset-md-3">
                  <h1 className='text-center display-4'> Register here</h1>
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group"> 
                    <label htmlFor="name"> Name : </label>
                        <input 
                        className ={error.name ? 'form-control is-invalid' : 'form-control' }
                        type="text" 
                        name= "name"
                        id="name"
                        value={name}
                        placeholder="Enter Your Name"
                        onChange={this.changeHandler}
                        />
                        <div  className="invalid-feedback">
                            {error.name}
                        </div>
                    </div>  
                      
                    <div className="form-group"> 
                    <label htmlFor="email"> Email : </label>
                        <input 
                        className ={error.email ? 'form-control is-invalid' : 'form-control' }
                        type="email" 
                        name= "email"
                        id="email"
                        value={email}
                        placeholder="Enter Your Email"
                        onChange={this.changeHandler}
                        />
                        <div  className="invalid-feedback">
                            {error.email}
                        </div>
                    </div>  
                      
                    <div className="form-group"> 
                    <label htmlFor="password"> Password : </label>
                        <input 
                        className ={error.password ? 'form-control is-invalid' : 'form-control' }
                        type="password" 
                        name= "password"
                        id="password"
                        value={password}
                        placeholder="Enter Your Password"
                        onChange={this.changeHandler}
                        />
                        <div  className="invalid-feedback">
                            {error.password}
                        </div>
                    </div>  
                      
                    <div className="form-group"> 
                    <label htmlFor="confirmedPassword"> Confirmed Password : </label>
                        <input 
                        className ={error.confirmedPassword? 'form-control is-invalid' : 'form-control' }
                        type="password" 
                        name= "confirmedPassword"
                        id="confirmedPassword"
                        value={confirmedPassword}
                        placeholder="Enter Your Confirmed Password"
                        onChange={this.changeHandler}
                        />
                         <div  className="invalid-feedback">
                            {error.confirmedPassword}
                        </div>
                    </div>  
                    <div> 
                        <Link to ="/login"> Already have an account? <span> Login</span> </Link>
                         <button type="submit" className="btn btn-primary ">Register</button>
                    </div>
                    </form>

              </div>
                
            </div>
        );
    }
}

 const mapStateToProps = (state) => ({
   auth: state.auth
})

export default connect(mapStateToProps, {register})(Register);