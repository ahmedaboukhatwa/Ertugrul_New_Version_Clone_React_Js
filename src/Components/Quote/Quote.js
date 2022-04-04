import { Component } from "react"
import "./Quote.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeftAlt,  faQuoteRightAlt} from '@fortawesome/free-solid-svg-icons'
class Quote extends  Component{
    render(){      
            return(
                <div className="quote">

                <div className="quote_content">
                <FontAwesomeIcon icon={faQuoteLeftAlt} />
                  <p>
                    
                      To those who say our power is not enough, we will say our faith is enough. To those who say our lifespan is not enough, we will say our history is enough. To those who say that the universe is not enough, we say God is enough for us.

                   </p>
                   <FontAwesomeIcon icon={faQuoteRightAlt} />
                </div>
             
               <span>Ertugrul Gazi</span>
              </div> 
            )
    }
    
}
export default Quote;
