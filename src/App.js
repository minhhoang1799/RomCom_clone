import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ROUTER_PAGE } from './router/router-path';
import Footer from './views/components/Footer/Footer';
import Header from './views/components/Header/Header';


function App() {
  return (
    <div className="App">
        <div id="wrapper">
          <Router>
            <Header/>
            <Switch>
              {
                ROUTER_PAGE.map((route) => <Route {...route}/>)
              }
            </Switch>
            <Footer/>
          </Router>
        </div>
    </div>
  );
}

export default App;
