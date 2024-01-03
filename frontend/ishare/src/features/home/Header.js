import {useDispatch} from 'react-redux'

// actions from slcie
import {
    mainDirectionHandler,
} from './homeSlice'
import {
    loginSignupDirectionHandler,
} from '../user/userSlice'

import { IoMenu } from "react-icons/io5"
import { CiSearch } from "react-icons/ci"
import { IoIosClose } from "react-icons/io"

const Header = () => {

    // hooks
    const dispatch = useDispatch()

    // show home search bar
    const showHomeSearchBar = () => {
        const homeSearchBar = document.querySelector('#home-search-bar')
        if(homeSearchBar.classList.contains('w-[0px]')){
            homeSearchBar.classList.remove('w-[0px]')
            homeSearchBar.classList.add('w-[170px]')
        }
    }

    // show home search bar
    const hideHomeSearchBar = () => {
        const homeSearchBar = document.querySelector('#home-search-bar')
        if(homeSearchBar.classList.contains('w-[170px]')){
            homeSearchBar.classList.add('w-[0px]')
            homeSearchBar.classList.remove('w-[170px]')
        }
    }

    // go to login register page
    const gotLoginPage = () => {
        dispatch(mainDirectionHandler('LOGINSIGNUP'))
        dispatch(loginSignupDirectionHandler('LOGIN'))
    }

    // go to signup page
    const goToSignupPage = () => {
        dispatch(mainDirectionHandler('LOGINSIGNUP'))
        dispatch(loginSignupDirectionHandler('SIGNUP'))
    }

    // back to home
    const backToHomePage = () => {
        dispatch(mainDirectionHandler('HOME'))
    }

  return (
    <header className="w-screen h-[48px] bg-emerald-700">
        <div className="h-full max-w-[1200px] mx-auto px-1 flex items-center justify-between">

            {/* menu icon and site logo */}
            <div className="flex items-center">
                <IoMenu className="text-gray-400 text-3xl cursor-pointer mr-1 sm:hidden"/>
                <span className="text-gray-400 cursor-pointer text-xl font-black" 
                onClick={backToHomePage}
                >iShare</span>
            </div>
            
            {/* search bar container */}
            <div className="w-full flex items-center justify-center">
                <div className="flex items-center rounded-full bg-white bg-opacity-[.15]">
                    <CiSearch className="text-2xl text-gray-300 cursor-pointer" onClick={showHomeSearchBar}/>
                    <div className="flex justify-between items-center w-[0px] sm:w-[230px] transition-all ease-in-out duration-500" id="home-search-bar">
                        <div className="flex items-center">
                            <input type="text" placeholder="search" className="w-full border-none bg-transparent focus:outline-none text-gray-300 text-sm font-serif"/>
                        </div>
                        <IoIosClose className="text-gray-400 text-lg cursor-pointer" onClick={hideHomeSearchBar}/>
                    </div>
                </div>
            </div>

            {/*  menue container */}
            <div>
                <div className="flex items-center text-sm font-serif text-gray-300">
                    <span className="border-[.115rem] border-gray-400 hover:bg-emerald-600 transition-all ease-in-out duration-500 rounded-sm px-3 cursor-pointer mr-1" 
                    onClick={gotLoginPage}
                    >Login</span>
                    <span className="hidden sm:inline-block border-[.115rem] border-gray-400 hover:bg-emerald-600 transition-all ease-in-out duration-500 rounded-sm px-3 cursor-pointer" 
                    onClick={goToSignupPage}
                    >Signup</span>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header