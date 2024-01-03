import {useSelector} from 'react-redux'

// actions
import {
  selectLoginSignupDirection,
} from './userSlice'

// pages
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

const LoginSignup = () => {

  // states from slices
  const loginSignupDirection = useSelector(selectLoginSignupDirection)

  return (
    <div className='flex-grow flex items-start justify-center'>
        {
            loginSignupDirection === 'LOGIN' 
            ?
            <LoginForm />
            :
            loginSignupDirection === 'SIGNUP'
            ?
            <SignupForm />
            :
            <></>
        }
    </div>
  )
}

export default LoginSignup