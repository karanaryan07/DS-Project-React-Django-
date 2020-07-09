import React from 'react';
import TopNavbar from './TopNavBar/TopBar.js'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes'
// import Dash from './Dashboard/Dashboard.js'
import './App.css'
class App extends React.Component{

  render()
  {
    
    return(
      <div>
        <Router>
          <TopNavbar />
          <BaseRouter />
        </Router>
      </div>      
    )
  }
}

export default App;
