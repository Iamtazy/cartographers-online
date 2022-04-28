import './App.css';
import { SocketContext, socket } from './context/socketContext';
import { GameContext } from './context/gameContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import { Navigate  } from 'react-router-dom';
import React, { useState } from "react";

export default function App() {

  const [username, setUsername] = useState("");

  return (
    <SocketContext.Provider value={socket}>
      <GameContext.Provider value={{username, setUsername}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/rooms' element={username.length > 0 ? <Rooms /> : <Navigate  to='/'/>} />
            <Route path='/room' element={username.length > 0 ? <Room /> : <Navigate  to='/'/>} />
            <Route path="*" element={<Navigate  to='/'/>} />
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </SocketContext.Provider>
  );
}
