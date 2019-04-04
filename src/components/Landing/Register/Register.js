import React, { Component } from 'react'
import './Register.css';
import {connect} from 'react-redux'
import {register} from '../../../ducks/UserReducer';

class Register extends Component {
  constructor(){
    super();
    this.state = {
      newUsername: '',
      newPassword: ''
    }
  }

  handleRegister = (e) => {
    e.preventDefault();
    const {newUsername, newPassword} = this.state;
    this.props.register(newUsername, newPassword);
  }

  render() {
    return (
      <div className="outer-reg">
        <div className='reg-div'>
          <form className='regForm'>
            <input
              placeholder='Username'
              name='newUsername'
              required
            />
            <input
              placeholder='password'
              name='newPassword'
              required 
            />
            <input 
            type='submit'
            value='Submit'
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({UserReducer}) => ({UserReducer})

export default connect(mapStateToProps, {register})(Register)
