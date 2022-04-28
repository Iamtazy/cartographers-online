import './App.css';
import { SocketContext, socket } from './context/socketContext';
import { GameContext } from './context/gameContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
import { Navigate  } from 'react-router-dom';
import React, { useState } from "react";

export default function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("")

  return (
    <SocketContext.Provider value={socket}>
      <GameContext.Provider value={{username, setUsername, room, setRoom}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='/lobby' element={username.length > 0 ? <Lobby /> : <Navigate  to='/'/>} />
            <Route path='/room' element={username.length > 0 && room !== "" ?  <Room /> : <Navigate  to='/'/>} />
            <Route path="*" element={<Navigate  to='/'/>} />
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </SocketContext.Provider>
  );
}
