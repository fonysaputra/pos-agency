import React from 'react'

function NavbarLandingPage() {
  return (
    <div className="App ">
      <nav className="navbar navbar-expand header-apps navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block"></li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="login" className="nav-link font-apps">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavbarLandingPage
