
import React from 'react';
import './globals.css';
import Header from './header.js'
import TopCards from './top-cards.js'
import Overview from './overview';
import Switch from './switch';

function App() {
  return (<>
    <Header>
      <Switch/>
    </Header>
    <TopCards/>
    <Overview/>
  </>);
}

export default App;
