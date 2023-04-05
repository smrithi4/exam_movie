import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Addmovie from './components/Addmovie';
import Addst from './components/Addst';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/mov' element={<Movies></Movies>}> </Route>
        
        <Route path='/add' 
         element={<Addst data={{id:"",dir:"", lang:"",gener:"",
          relyear:""
        }} 
          method="post"></Addst> } />
      </Routes>
  </BrowserRouter>
  
     </div>
  );
}

export default App;