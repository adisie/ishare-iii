import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


// mine
import {store} from './app/store'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)