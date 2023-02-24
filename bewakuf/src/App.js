import './App.css';
import Allroutes from './Component/Allroutes';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer/Footer.jsx'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/>
    <Footer/>
    </div>
  );
}

export default App;
