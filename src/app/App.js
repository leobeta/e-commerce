import React from 'react';
import 'fontsource-roboto';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact us</a>
            </li>
          </ul>
        </nav>
        <div>
          <h3>Promotions</h3>
        </div>
      </>
    );
  }
}
export default App;
