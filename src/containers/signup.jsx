import React, { Component } from 'react'

import { Link, Redirect } from "react-router-dom";
//fireBaseApp
import { fireBaseApp } from "../firebase";

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      email: '',
      password:'', 
      redirected:false, 
      error :{
        message:''
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log(`this state is ${this.state}`)
    const {email, password} = this.state
    fireBaseApp.createUserWithEmailAndPassword(email, password)
    .then((u)=>{
      alert('User Created')
      this.setState({redirected:true})

    }).catch(error =>{
            this.setState({error})
        })
    this.setState({error:''})
  }
   render() {
    if(this.state.redirected){
      return <Redirect to={'/login'} />;
    }
    return (
      <div>
        <h1> Sign Up </h1>
        <input className='form-control'
          type='text'
          placeholder=' Enter Your Name '
          onChange={event => this.setState({ name: event.target.value })} />

        <input className='form-control'
          type='text'
          placeholder=' Enter Your Email '
          onChange={event => this.setState({ email: event.target.value })} />

        <input className='form-control'
          type='password'
          placeholder=' Enter Your Password '
          onChange={event => this.setState({ password: event.target.value })} />

        <button className='btn btn-primary'
          type='button'
          onClick ={this.handleClick} >
          Sign Up
        </button>
        <div>{this.state.error.message}</div>
        <div> <Link to={'/login'}>Login Here</Link> </div>
      </div>
    )
  }
}

