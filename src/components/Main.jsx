<<<<<<< HEAD
import React, { Component } from "react";
import Home from "./Home"
import Login from "./Login"
class Main extends Component {
  state = {
    user: {
      name: "user",
      auth: false,
    },
    coupons: [],
  };
  
  componentDidMount() {
    let url = "http://localhost:3001/coupons";
      fetch(url).then(res => res.json()).then(data => {
          let coupons = data.map(coupon => {
              return coupon
          })
          this.setState({
              coupons:coupons
          })
      })
    
    
      
    }
    callbackFunction = (name) => {
      this.setState({
        user:{
          name:name,
          auth:true
        }
      })
    }
    
    render() {     
      // let check = this.state.user.auth?<Home/>:<Login/>   
      const isAuth = this.state.user.auth ? <Home data={this.state.coupons} name={this.state.user.name} />:<Login parentCallback = {this.callbackFunction}/>
      return (
        <div>
          {isAuth}
        </div>
      )
    
  }
}
=======
import React, { Component } from "react";
import Home from "./Home"
import Login from "./Login"
class Main extends Component {
  state = {
    user: {
      name: "user",
      auth: false,
    },
    coupons: [],
  };
  
  componentDidMount() {
    let url = "http://localhost:3001/coupons";
      fetch(url).then(res => res.json()).then(data => {
          let coupons = data.map(coupon => {
              return coupon
          })
          this.setState({
              coupons:coupons
          })
      })
    
    
      
    }
    callbackFunction = (name) => {
      this.setState({
        user:{
          name:name,
          auth:true
        }
      })
    }
    
    render() {     
      // let check = this.state.user.auth?<Home/>:<Login/>   
      const isAuth = this.state.user.auth ? <Home data={this.state.coupons} name={this.state.user.name} />:<Login parentCallback = {this.callbackFunction}/>
      return (
        <div>
          {isAuth}
        </div>
      )
    
  }
}
>>>>>>> 8a5e369931205b534b2db22ddad9e9e45d5730b1
export default Main;