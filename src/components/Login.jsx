<<<<<<< HEAD
import React from 'react'
import GoogleLogin from 'react-google-login';
export default function Login(props) {
    const responseGoogle = (response) => {
        props.parentCallback(response.Hs.QS);
    }

    return (
        <div className="loginForm">
            <h1 className="headerLogin">LOGIN TO FIND COUPONS</h1>
            <br/>
            <div>
          
                <GoogleLogin
                    clientId="827339527611-lkbcb6n0msqjpbrhv0ldqskfqkvk6b2h.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}    
                />
            </div>
        </div>
    )
    
}
=======
import React from 'react'
import GoogleLogin from 'react-google-login';
export default function Login(props) {
    const responseGoogle = (response) => {
        props.parentCallback(response.Hs.QS);
    }

    return (
        <div className="loginForm">
            <h1 className="headerLogin">LOGIN TO FIND COUPONS</h1>
            <br/>
            <div>
          
                <GoogleLogin
                    clientId="827339527611-lkbcb6n0msqjpbrhv0ldqskfqkvk6b2h.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}    
                />
            </div>
        </div>
    )
    
}
>>>>>>> 8a5e369931205b534b2db22ddad9e9e45d5730b1
