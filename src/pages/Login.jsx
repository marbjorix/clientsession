import React, { useContext, useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

// import logincontext for at kunne gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'

import { usePostData } from '../hooks/useRequestData'



const Login = () => {

  const { signIn, adminUser } = useContext( LoginContext )

  const [ email, setEmail ] = useState()
  const [ pw, setPw ] = useState()

  const { error, loading, data, postData } = usePostData()


  // lyt efter om login lykkedes = data og et "name" i data
  useEffect( () => {

    if ( data && data.name ) {
      signIn( data.name )
    }

  }, [ data ] )


  // hvis en bruger er logget ind så videresend til admin
  if ( adminUser ) {
    return <Navigate to="/admin" replace />
  }


  // Håndter login
  const handleLogin = ( e ) => {

    e.preventDefault()

    postData( "http://localhost:5111/api/user/login", { email: email, password: pw } )

  }




  return (
    <div className="Login">

      <h1>Login</h1>

      { error && <h2>Der er opstået en fejl</h2> }
      { loading && <h2>Der loades - vent venligst ...</h2> }

      <form onSubmit={ handleLogin }>

        <div>
          <label>Email:
            <input type="email" onChange={ ( e ) => setEmail( e.target.value ) } name="email" required placeholder="Email" />
          </label>
        </div>

        <div>
          <label>Password:
            <input type="password" onChange={ ( e ) => setPw( e.target.value ) } name="password" required placeholder="Password" />
          </label>
        </div>

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default Login