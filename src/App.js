import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import DisplayAllPokemon from './components/DisplayAllPokemon';
import DisplayPokemon from './components/DisplayPokemon';

function App() {
  return (
    <>
      <div className="App">
        <Appbar/>
        {/* <Router>
          <Routes>
            <Route path="/" component={DisplayAllPokemon}></Route>
            <Route path="/pokemon/:id" component={DisplayPokemon}></Route>  
          </Routes>
        </Router> */}
      </div>
    </>
    
  );
}

export default App;
