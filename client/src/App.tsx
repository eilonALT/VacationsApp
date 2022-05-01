import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import './App.css';
import clouds from './clouds.png';
import sun from './sun.png';
import palm from './palm.png';
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

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    socket.emit('change', e.target.value);
    setMessages(e.target.value);
  }

  useEffect(() => {
    console.log('App.tsx: useEffect()');
    console.log(user);
    socket.on('changed', (data: string) => {
      console.log('App.tsx: socket.on("changed")');
      console.log(data);
      setMessages(data);
    })
  }, [user]);

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
