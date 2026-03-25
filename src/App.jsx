import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';

import './App.css'

import { Header } from './components/Header';
import { Set } from './components/Set';

function App() {
  
  return (
    <div className='App'>
      <Header/>
      <Set/>

    </div>
  );
}

export default App
