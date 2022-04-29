import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/gameContext';
import { useNavigate } from "react-router-dom";
import  styles from '../css/Login.module.css'
import { socket } from '../context/socketContext';


export default function Login() {

  const { username, setUsername } = useContext(GameContext)
  const [ isValidUsername, setIsValidUsername ] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    socket.on('validUsername', () => {
      navigate('/lobby')
    })

    socket.on('invalidUsername', () => {
      setIsValidUsername(false)
    })

    return () => {
      socket.off('validUsername')
      socket.off('invalidUsername')
    }
  }, [navigate])

  const handleLogin = () => {
    if (username.length > 0){
      socket.emit('setUsername', username)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Cartographers</div>
      <div className={styles.loginLabel}>Username:</div>
      <input type='text' name='username'
        onChange={(event) => setUsername(event.target.value)} 
        onKeyPress={(event) => { if (event.key === 'Enter') handleLogin() }}/>
      <button className={styles.button} onClick={handleLogin}>Login</button>
      {!isValidUsername && <p>This username is already taken, please choose another one!</p>}
    </div>
  )
}
