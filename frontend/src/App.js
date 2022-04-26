import './App.css';
import { SocketContext, socket } from './context/socketContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Navigate  } from 'react-router-dom';

export default function App() {

  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<Navigate  to='/'/>} />
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}
