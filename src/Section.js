import React, {Component} from "react";
import Banner from "./Banner";
import Recomendaciones from "./Recomendaciones";

class Section extends Component{
    render(){
        return(
            <div id="Section" > 
              <Banner />
              <hr className="hr2"></hr>
              <Recomendaciones />      
            </div>
        )
    };
}

export default Section;