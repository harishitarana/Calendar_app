
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Try from './components/logintry';


function App() {
  return (
   <>
   <Routes>
       

        
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="try" element={<Try/>}/>
      

     
      </Routes>


    
   </>
  );
}

export default App;
