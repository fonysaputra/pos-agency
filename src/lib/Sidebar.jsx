import React from 'react'
import { connect } from 'react-redux'
import { getHome, getBarang } from '../actions'

function SideBar(props){

  console.log(props.home.page)
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
               style={{opacity: 0.8}} />
          <span className="brand-text font-weight-light">POS Agency</span>
        </a>
    
        <div className="sidebar">
      
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
           
              <li className="nav-item has-treeview menu-open">
                <span className="nav-link active" onClick={()=>props.getHome("home")}>
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Home
             
                  </p>
                </span>
             
              </li>
           
            
              <li className="nav-header">MASTER DATA</li>
              <li className="nav-item ">
                <a href="pages/widgets.html"  className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Barang
                   
                  </p>
                </a>
              </li>


              <li className="nav-item ">
                <a href="pages/widgets.html"  className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Supplier
                   
                  </p>
                </a>
              </li>

          
             
           
             
              <li className="nav-header">PENJUALAN</li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Barang Masuk</p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Barang Keluar</p>
                </a>
              </li>

           
            </ul>
          </nav>
        </div>
      </aside>
    
    )
}

const mapStateToProps = (state) => ({
  home: state.responseHome,

})


const mapDispatchToProps = (dispatch) => ({
  getHome: (page) => dispatch(getHome({ page:page })),
  getBarang: (page) => dispatch(getBarang({page:page})),
})


export default connect(mapStateToProps, mapDispatchToProps)(SideBar)