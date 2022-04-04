import { Component } from "react"
import "./Subscribe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons'

class Subscribe extends  Component{
  
    render(){      
      
            return(
                <div className="subscribe">
                <div className="subscribe_text">
                  <span>SUBSCRIBE TO THE TRIBE!</span>
                  <p>
                    You’ll receive the latest updates from TRT.
                    <br/>
                    THE EMAIL FIELD IS REQUIRED.
                  </p>
                </div>
               
                <div className="subscribe_input">
                  <input type="text" placeholder="Your Email"/>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight}/>
                  </button>
                </div>
               
              </div>
            )
    }
    
}
export default Subscribe;