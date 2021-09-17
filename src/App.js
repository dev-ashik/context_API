import {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export const categoryContext = createContext();

function App() {
  const [category, setCetagory] = useState([]);
  
  return (
    <categoryContext.Provider value={[ category, setCetagory]}>
      <Header/>
      <Home/>
    </categoryContext.Provider>
  );
}

export default App;
