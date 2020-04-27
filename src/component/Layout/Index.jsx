import React,{Component} from "react"

import Navbar from "../../lib/Navbar"
import SideBar from "../../lib/Sidebar"
import Footer from "../../lib/Footer"
import HomePage from "../home-page/Index"

class Index extends Component{

    render(){
        return(
            <div className="wrapper">
            <Navbar />
            <SideBar />
            
            <HomePage/>

            <Footer />
            </div>
        )
    }
}


export default Index