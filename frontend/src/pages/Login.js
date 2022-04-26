import React, { useContext } from 'react'
import { SocketContext } from '../context/socketContext'

export default function Login() {

    const socket = useContext(SocketContext)

  return (
    <div>Login</div>
  )
}
