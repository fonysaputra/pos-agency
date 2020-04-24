import React, { useState } from 'react'

function Index() {
  let [icon, setIcon] = useState('fas fa-eye')
  let [type, setType] = useState('password')

  let handlingShowPassword = () => {
    if (type === 'password') {
      setIcon('fas fa-eye-slash')
      setType('text')
    } else {
      setIcon('fas fa-eye')
      setType('password')
    }
  }

  return (
    <div className="hold-transition login-page">
      <div className="hr-purple"></div>
      <div className="login-box ">
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              <img
                src="dist/img/AdminLTELogo.png"
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: 0.8 }}
              />
            </p>
            <p className="login-box-msg">Login In System Pos Agency</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type={type}
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span
                      onClick={() => handlingShowPassword()}
                      className={icon}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
