import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Route exact path="/calculator">
          <div className="container">
            <Calculator />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </>
    );
  }
}

export default App;
