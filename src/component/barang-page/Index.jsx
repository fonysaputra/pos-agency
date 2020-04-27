import React,{Component} from "react"

import Navbar from "../../lib/Navbar"
import SideBar from "../../lib/Sidebar"
import Footer from "../../lib/Footer"

class Index extends Component{

    render(){
        return(
            <div className="wrapper">
            <Navbar />
            <SideBar />
            <span>Barang</span>
            <Footer />
            </div>
        )
    }
}


export default Index