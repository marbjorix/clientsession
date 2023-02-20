import { useContext } from 'react'

import { LoginContext } from '../context/LoginContext'
import { useGetData } from '../hooks/useRequestData'


// Button til logud
const Logout = () => {

    // signOut-metoden fra context/"global state"
    const { signOut } = useContext( LoginContext )

    // GET-request med axios fra useRequest-hook'et
    const { error, loading, getData } = useGetData()

    const handleLogout = () => {

        // send GET-request til API om at logge ud (= slet cookie/session )
        getData( "http://localhost:5111/api/user/logout" )
        signOut() // giv besked til "global state" om at slette den gemte login-bruger
    }

    return (
        <div>
            { error && <h2>Der er sket en fejl ...</h2> }
            { loading && <h2>Der loades - vent venligst ...</h2> }
            <button onClick={ handleLogout }>Log ud</button>
        </div>
    )
}

export default Logout