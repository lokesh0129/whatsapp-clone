import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth , provider} from '../firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
  const [{} , dispatch] = useStateValue()
   

    const signIn =() =>{
        auth.signInWithPopup(provider)
         .then(result => {console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
         .catch(error => console.log(error.message))
    }
  return (
     <div className="login">
        <div className="login__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="Whatsapp" />
            <div className="login__text">
                <h1>
                    Sign in to What's app
                </h1>
            </div>
             <Button onClick={signIn}>
                sign in with google 
             </Button>
        </div>
     </div>
  )

}

export default Login