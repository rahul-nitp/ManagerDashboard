import React, { Component } from "react";


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchManData } from "../actions/index";

import { Link, Redirect } from "react-router-dom";
//firebase
import { fireBaseApp } from "../firebase";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            },
            redirected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchManData()
    }
    handleClick(e){
        e.preventDefault();
        const {email, password} = this.state;
        console.log(`email-- ${email}  and password  - ${password}`)
        fireBaseApp.signInWithEmailAndPassword(email, password)
        .then((u)=>{
            alert("Login SuccessFul. Redirecting to home...")  
            this.setState({redirected:true})        
        }).catch(error =>{
                this.setState({error})
            })
        this.setState({error:''})
    }
    render() {
        if(this.state.redirected){
            return <Redirect exact to={'/'} />;
        }
        return (
            <div className='form-control'>
            <h1> Login here </h1>
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
                    onClick={this.handleClick} >
                    Login
                </button>
                <div>{this.state.error.message}</div>
                <div> <Link to={'/signup'}>Sign Up Here</Link> </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchManData}, dispatch)
}
//when we are passing null for mapStateToProps - It means this container is not bothered about the state. State not needed
export default connect(null, mapDispatchToProps)(Login)