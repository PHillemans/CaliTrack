import React from 'react';

import Dashboard from './containers/Dashboard';
import Header from './containers/Header'

class App extends React.Component {
    render() {
      return (
        <div className="App">
            <Header />
            <Dashboard />
        </div>
      );
    }
}

export default App;
