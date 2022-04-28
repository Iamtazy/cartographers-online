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
      navigate('/rooms')
    })

    socket.on('invalidUsername', () => {
      console.log('invalidUsernameRun')
      setIsValidUsername(false)
    })

    return () => {
      socket.off('validUsername')
      socket.off('invalidUsername')
    }
  }, [navigate])

  const handleLogin = () => {
    socket.emit('setUsername', username)
  }

  return (
    <div className='container'>
      <div className='title'>Cartographers</div>
      <div className='loginLabel'>Username:</div>
      <input type='text' name='username' id='username' onChange={(event) => setUsername(event.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      {!isValidUsername && <p>This username is already taken, please choose another one!</p>}
    </div>
  )
}
