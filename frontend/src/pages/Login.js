import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/gameContext';
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
import { socket } from '../context/socketContext';


export default function Login() {

  const { username, setUsername } = useContext(GameContext)
  const [ isValidUsername, setIsValidUsername ] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    socket.on('validUsername', () => {
      navigate('/lobbies')
    })

    socket.on('invalidUsername', () => {
      console.log('invalidUsernameRun')
      setIsValidUsername(false)
    })

    return () => {
      socket.off('validUsername')
      socket.off('invalidUsername')
    }
  }, [socket])

  const handleLogin = () => {
    socket.emit('setUsername', username)
  }

  return (
    <div className='container'>
      <h1>Cartographers</h1>
      <p>Username:</p>
      <input type='text' name='username' id='username' onChange={(event) => setUsername(event.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      {!isValidUsername && <p>This username is already taken, please choose another one!</p>}
    </div>
  )
}
