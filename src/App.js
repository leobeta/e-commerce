import React from 'react';
import './App.css';
import ItemCounter from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemListContainer greeting={'Leo'} />
        <ItemCounter />
      </>
    );
  }
}
export default App;
