import React from 'react';
import {originals,actions} from './urls'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import './App.css';

const App = () =>{

  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' urls={originals}/>
      <RowPost title='Action' isSmall urls={actions}/>
    </div>
  );

}

export default App;
