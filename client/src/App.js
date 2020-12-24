import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalProvider from './utils/GlobalContext';
// import Homepage from './pages/Homepage';
import Search from './pages/Search/Search';
import Saved from './pages/Saved/Saved';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <div className="App">
          <Switch>
            {/* <Route exact path='/' component={Homepage} /> */}
            <Route exact path='/saved' component={Saved} />
            <Route exact path='/' component={Search} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}


export default App;
