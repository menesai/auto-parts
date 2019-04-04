import React, { Component } from 'react'
import './Login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, getUser} from '../../../ducks/UserReducer';

class Login extends Component {
  constructor(){
    super();
    this.state ={
      username: '',
      password: '',
      errorUsername: ''
    }
  }


  loginInputs = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount(){
    this.props.getUser()
  }

  validate = () => {
    let userNameErorr = '';
  }

  loginSubmit = (e) => { 
    e.preventDefault()
    const {username,password}=this.state;
    this.props.login(username, password)
    const isValid = this.validate();
    if(isValid){
      
    }
  }


  render() {
    return (
      <div className='login-outer'>
        <img className='login-img' src='https://www.brooksautopartsor.com/wp-content/uploads/sites/507/2017/07/Auto-parts-478107962.jpg' alt='landing page'/>
        <div className='shadow'/>
        <div className='login-info'>
            <h1 className='lgn-title'>Auto Partz</h1>
            <div className='login-p' >
                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
        </div>
        <div className='login-form'>
            <div><h1>Login</h1></div>
                <form className='form-inputs' onSubmit={(e) =>this.loginSubmit(e)}>
                    <input
                    placeholder='Username'
                    className='lgn-name'
                    name='username'
                    onChange={this.loginInputs}
                    />
                    <small>{this.state.errorUsername}</small>
                    <input
                    placeholder='Password'
                    className='lgn-pass'
                    name='password'
                    onChange={this.loginInputs}
                    type='password'
                    />
                    <input 
                    type='submit' 
                    value="Submit"/>
                </form>
                <Link className='lgn-reg-link' to='/register'><p className='lgn-reg-link'>New to Auto Partz?</p></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UserReducer}) => ({...UserReducer});

export default connect(mapStateToProps, {login, getUser})(Login);
