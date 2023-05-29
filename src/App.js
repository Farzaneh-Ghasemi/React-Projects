import React, { Component } from 'react'
import AccordionToolbar from './accordion-components/AccordionToolbar';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AccordionToolbar />
        </div>
        <main>
          {/* Other components and content */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;
