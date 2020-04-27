import React, { Component } from "react"

import Content from "./Content"

class Index extends Component {

    render() {
        return (
            <div className="content-wrapper" style={{ padding: 20 }}>
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">
                      Selamat Datang 
                    </h1>
                  </div>
                
                </div>
              </div>
            </div>
           <Content />
          </div>
        )
    }
}


export default Index