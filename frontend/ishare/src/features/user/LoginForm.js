import {useDispatch} from 'react-redux'

// actions
import {
  mainDirectionHandler,
} from '../home/homeSlice'
import {
  loginSignupDirectionHandler,
} from './userSlice'

const LoginForm = () => {

  // hooks
  const dispatch = useDispatch()

  // go to signup
  const goToSignUp = () => {
    dispatch(mainDirectionHandler('LOGINSIGNUP'))
    dispatch(loginSignupDirectionHandler('SIGNUP'))
  }

  return (
    <div className="flex-grow max-w-[550px] mx-auto mt-5 flex justify-center p-1">
      <form className=" bg-black bg-opacity-[.075] flex flex-col p-1 px-7 items-center rounded-sm">
        <span className="text-lg text-emerald-800 font-bold font-serif p-1">Login</span>
        {/* username container */}
        <div className="mb-[.45rem]">
          <div>
            <input className="focus:outline-none border border-emerald-700 border-opacity-[.25] focus:border-opacity-[.5] rounded-sm text-sm font-serif px-[.3rem] py-[.13rem] w-[200px]" type="text" name="username" placeholder="username"/>
          </div>
          <div className="flex items-center justify-center text-xs font-serif text-red-700"></div>
        </div>

        {/* password container */}
        <div className="mb-[.45rem]">
          <div>
            <input className="focus:outline-none border border-emerald-700 border-opacity-[.25] focus:border-opacity-[.5] rounded-sm text-sm font-serif px-[.3rem] py-[.13rem] w-[200px]" type="password" name="password" placeholder="password"/>
          </div>
          <div className="flex items-center justify-center text-xs font-serif text-red-700"></div>
        </div>

        {/* btn container */}
        <div className="flex-grow w-full bg-emerald-800 rounded-sm cursor-pointer flex items-center justify-center py-1 mb-2">
          <span className="text-sm text-gray-400 font-serif">Login</span>
        </div>
        <div className="flex-grow w-full cursor-pointer flex items-center justify-center py-1">
          <span className="text-xs text-gray-400 font-serif hover:text-gray-500 hover:underline" 
          onClick={goToSignUp}
          >don't have an account ?</span>
        </div>
        <div className="flex-grow w-full cursor-pointer flex items-center justify-center py-1">
          <span className="text-xs text-gray-400 font-serif hover:text-gray-500 hover:underline">forget password</span>
        </div>
      </form>
    </div>
  )
}

export default LoginForm