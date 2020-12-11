import './App.css'
import {
  Switch,
  Route
} from 'react-router-dom'
import { Homepage, NamePage, CountryPage } from 'components/pages'
import { Navbar, Footer } from 'components/organisms'

function App() {
  return (
    <div className='layout__wrapper'>
      <div className='navbar__wrapper'>
        <Navbar />
      </div>
      
      <Switch>
        <Route path="/country" component={ CountryPage } />
        <Route path="/name" component={ NamePage } />
        <Route path="/detail" component={ Homepage } />
        <Route path="/" component={ Homepage } />
      </Switch>
      
      <div className='footer__wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default App
