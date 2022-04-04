import { Component } from "react"
import "./Footer.css"
//import Nav from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faInstagram,faFacebookSquare,faTwitter } from '@fortawesome/free-brands-svg-icons'

class Footer extends  Component{
  
    render(){      
      
            return(
                <footer>
                <div className="logo">
                <img src={require("../../images/intro/logo-en.png")} alt=""/>
                <ul>
                  <li className="li_about">About</li>
                  <li className="li_seasons">Seasons</li>
                  <li className="li_quote">Quote</li>
                  <li className="li_warriors">Warriors</li>
                  <li className="li_subscribe">Subscribe</li>
                </ul>
                </div>
                <div className="media">
                  <span>FOLLOW Us</span>
          
                  <ul>
                    {/* <li><FontAwesomeIcon icon={}/></li> */}
                    <li><FontAwesomeIcon icon={faYoutube} /></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                  </ul>
                </div>
                <div className="rights">
                  <span><strong>coded by : </strong>  <a href="https://a-mohammed2001.github.io/My-Cv/" target="blank">Ahmed Abou Khatwa</a></span>
                </div>
              </footer>
            )
    }
    
}
export default Footer;