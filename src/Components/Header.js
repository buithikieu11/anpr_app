import React, { Component } from 'react'
import logo from '../Assets/Images/iconthaco.png'
import '../Assets/Styles/Header.css'
 class Header extends Component {
  render() {
    return (
        <div className="row">
          <div className="logo">
            <img src={logo} 
                alt="logo"/>
          </div>
          <div className='text'>
            <h1>HỆ THỐNG GIÁM SÁT TỰ ĐỘNG</h1>
          </div>
        </div>
    )
  }
}
export default Header; 