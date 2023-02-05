
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Try from './components/Login/logintry';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';


function App() {
  return (
    <>
      <Routes>


        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home/>} />
        <Route path="try" element={<Try />} />




      </Routes>



    </>
  );
}

export default App;
