import { Component } from "react"
import "./Color_Swicher.css"
class Color_Swicher extends  Component{
  swich_color = (e)=> {
    if (e.target.classList.contains("blue_theme")) {
      //  e.target.nextSibling.classList.remove("active_theme");
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        e.target.parentElement.children[i].classList.remove("active_theme");
      }
  
      document.body.classList.remove("red");
      e.target.classList.add("active_theme");
    } else if (e.target.classList.contains("red_theme")) {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        e.target.parentElement.children[i].classList.remove("active_theme");
      }
      // e.target.previousSibling.classList.remove("active_theme");
      document.body.classList.add("red");
      e.target.classList.add("active_theme");
    }
  };
    render(){      
      
            return(
                <div class="color_swicher" onClick={this.swich_color}>
                <span class="blue_theme active_theme"></span>
                <span class="red_theme"></span>
              </div>
            )
    }
    
}
export default Color_Swicher;
