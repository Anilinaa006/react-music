import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import 'normalize.css'
import './assets/css/index.less'
import store from './store/index'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
