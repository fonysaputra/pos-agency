import React from 'react'
import {Image} from "react-bootstrap"

function Navbar() {
  return (
    <div className="App">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>

          <div className="user-panel  mt-1 d-flex">
            <div className="image">
              <Image
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="/" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
         
        </ul>

        <ul className="navbar-nav ml-auto">
        
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="/"
              role="button"
            >
              <i className="fas fa-sign-out-alt" title="sign out"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
