import React,{Component} from "react"

import ContentBox from "../landing-page/ContentBox"


class Content extends Component {
    render(){
        return(
            <section className="content">
             <div className="container-fluid">
              <ContentBox />
              </div>
            </section>
        )
    }
}

export default Content