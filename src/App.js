import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Programmes from './components/Programmes';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import About from './components/About';
import { Routes,Route } from 'react-router-dom';



function App() {
  return (

    <div className="App">


      <Nav/>
       
        <Routes>
          <Route element={<Home/>} path="/Techno-GYM/" />
          <Route element={<Programmes/>} path="/programmes"  />
          <Route element={<Trainers/>} path="/trainers"  />
          <Route element={<About/>} path="/about"  />
          <Route element={<Contact/>} path="/contact"  />
        </Routes>


    </div>

  );
}

export default App;
