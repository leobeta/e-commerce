import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greetings='Leo' />
      </>
    );
  }
}
export default App;
