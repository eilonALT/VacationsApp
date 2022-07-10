import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import './App.css';
import clouds from './images/clouds.png';
import sun from './images/sun.png';
import palm from './images/palm.png';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import Vacations from './components/Vacations';
import ProtectedRoutes from './features/ProtectedRoutes';
import AdminRoutes from './features/AdminRoutes';
import AdminDashboard from './components/AdminDashboard';

const socket = io('http://localhost:5000');

function App() {
  const user = useSelector((state: any) => state.user.value);

  const [messages, setMessages] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-images'>
          <img className="clouds" src={clouds} alt="loading" />
          <img className="sun" src={sun} alt="loading" />
          <img className="palm" src={palm} alt="loading" />
        </div>
        <Routes>
          <Route element={<AdminRoutes />}>
            <Route path='/' element={<AdminDashboard />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/vacations' element={<Vacations />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
