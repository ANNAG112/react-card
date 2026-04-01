import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import { PageViewSet } from './components/PageViewSet';
import { PageSelectSet } from './components/PageSelectSet';
import {PageCreateSet} from './components/PageCreateSet'
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageSelectSet />}/>
      <Route path="/set" element={<PageViewSet/>}/>
      <Route path="/admin" element={<PageCreateSet/> }/>
      <Route path="*" element={<PageSelectSet/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
