import React, { useContext, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import logo from '../logo.svg'
import { useGlobalContext } from './context'
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';

export default function Navbar(props) {

  let history = useHistory();
  let location = useLocation();
  let { isLoggedIn, setIsLoggedIn } = useGlobalContext()
  //console.log("SACHNAV ", props.title, location.pathname, isLoggedIn);

  localStorage.getItem(ACCESS_TOKEN_NAME)
  //console.log("tok ", localStorage.getItem(ACCESS_TOKEN_NAME))
  //  console.log("In NAvbar", isLoggedIn)
  useEffect(() => {
    //  console.log("In useEffect", isLoggedIn)
    if (localStorage.getItem(ACCESS_TOKEN_NAME) === "response.data.token")
      setIsLoggedIn(true);
  }
    , [])

  function renderLogout() {

    //   console.log("In renderLogout")


    return (
      // (location.pathname === '/home') ?
      (isLoggedIn) ?
        < div className="ml-auto" >
          <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
        </div >
        // <li>
        //   <Link to='/'>logout</Link>
        //   {/* {setIsLoggedIn(false)} */}
        // </li>
        :
        <Link to='/login'>login</Link>


    )

  }
  function handleLogout() {
    // localStorage.removeItem(ACCESS_TOKEN_NAME)
    // console.log("IN handleLogout");
    setIsLoggedIn(false)
    localStorage.setItem(ACCESS_TOKEN_NAME, "");
    history.push('/')
  }
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='restaurant db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            {/* <Link to='/login'>login</Link> */}
            {renderLogout()}
          </li>
          {/* <li>
            <Link to='/register'>register</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
