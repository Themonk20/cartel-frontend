
import SignIn from './components/SignIn'
import Header from './components/Header'
import Body from './components/Body'
import HeaderCurve from './components/HeaderCurve'
import {Provider} from 'react-redux'
import store from './utils/store'


const App= () =>
 {
  return(
    <Provider store={store}>
    <div>
    <Body/>
    </div>
    </Provider>
  )
    
  
 }

 export default App;