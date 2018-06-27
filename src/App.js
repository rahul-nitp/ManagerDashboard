import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//my components
import Login from "./containers/login.jsx";
import Home from "./containers/home.jsx";
//firebase
import { fireBaseApp } from "./firebase";

class App extends Component {
  constructor(props){
    super(props)
    this.state={user:null}
    this.authListener = this.authListener.bind(this)
  }
  componentDidMount() {
    this.authListener()
  }
  authListener(){
    fireBaseApp.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        this.setState({user})
        localStorage.setItem('user', user.uid)
      }else{
        this.setState({user: null})
        localStorage.removeItem('user')
      }
    })
  }
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      {this.state.user ? (<Home/>) : (<Login/>) }
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
