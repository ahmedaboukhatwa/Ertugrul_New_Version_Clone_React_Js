import { Component } from "react"
import "./Intro.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong  } from '@fortawesome/free-solid-svg-icons'

class Intro extends  Component{
  
    render(){   
      return(
          <div className="intro">
          <div className="content">
          <span> THE STORY ABOUT</span>
            <h1> THE RESURRECTION OF A NATION</h1> 
            <p>
              Welcome to the Kayi tribe! 'Resurrection: Ertugrul' is a Turkish period drama that tells the story of the famous 13th-century warrior Ertugrul Bey, the father of Osman Gazi who would go on to establish the Ottoman Empire.
            </p>
          </div>
          <button className="btn_down">
          <FontAwesomeIcon icon={faDownLong} />
          </button>
          <canvas id="sand"></canvas>
        </div>
      )
    }
    
}
export default Intro;