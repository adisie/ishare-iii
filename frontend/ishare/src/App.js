import axios from 'axios'

// pages
import Home from "./features/home/Home"

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <Home />
  )
}

export default App