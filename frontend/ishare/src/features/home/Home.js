import {useSelector} from 'react-redux'

// actions
import {selectMainDirection} from './homeSlice'

// components
import Header from "./Header"
// pages
import Posts from "../posts/Posts"
import LoginSignup from "../user/LoginSignup"

const Home = () => {
    // state from slice
    const mainDirection = useSelector(selectMainDirection)

  return (
    <div className="w-screen h-screen flex flex-col">
        <Header />
        {
            mainDirection === 'HOME'
            ?
            <Posts />
            :
            mainDirection === 'LOGINSIGNUP'
            ?
            <LoginSignup />
            :
            <></>
        }
    </div>
  )
}

export default Home