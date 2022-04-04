import { Component } from "react"
import "./About.css"

class About extends  Component{
    render(){      
            return(
                <div className="about">
                <div className="about_wallpaper">
                  <img className="up_img" src={require("../../images/about/cloud.png")} alt="" srcset="" />
                  <img
                    className="down_img"
                    src={require("../../images/about/cloud.png")}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="about_img">
                  <img src={require("../../images/about/KAYI TRIBE.jpg")}  alt="" />
                </div>
                <div className="about_info">
                  <span>THE STORY OF THE<h2>KAYI TRIBE</h2></span>
                  <p>
                    Set in Anatolia (modern-day Turkey), the nomadic Kayi tribe of the
                    Oghuz Turks are on a quest to find a place they can finally call home.
                    Ertugrul, the leader of the tribe, leads his people through
                    perseverance against hardship while striving for justice and
                    maintaining the traditions of the land. By battling his enemies with
                    strength and bravery, Ertugrul consequently plants the seed that would
                    lead to the founding of the Ottoman Empire, which spread across three
                    continents and ruled for six centuries.
                  </p>
                </div>
              </div>
            )
    }
    
}
export default About;
