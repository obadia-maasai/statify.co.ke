import './App.css';
import AboutUs from './AboutPage/About';
import Home from './HomePage/Home'
import Navbar from './NavbarPage/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Home/>   
    <AboutUs/>  
     
    </div>
  );
}

export default App;
