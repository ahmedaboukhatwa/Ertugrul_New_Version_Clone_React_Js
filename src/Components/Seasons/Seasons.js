import { Component } from "react"
import "./Seasons.css"

class Seasons extends  Component{
    render(){      
            return(
                <div className="seasons">
                <img src={require("../../images/seasons/wallpaper.webp")} alt="" className="seasons_wallpaper"></img>
                <div className="season">
                  <img src={require("../../images/seasons/season1.jpg")} alt="" />
                  <div className="season_info">
                    <h2>Season 1</h2>
                    <p>
                      Ertugrul and his friends encounter the Knights Templar on a hunt.
                      After rescuing three Seljuk prisoners, they return to the Kayi
                      tribe. But the new arrivals cause problems for the tribe's leader
                      Suleyman Shah. He dispatches Ertugrul on a mission to find new land
                      and seek an agreement with the Sultan in Aleppo.
                    </p>
                  </div>
                </div>
                <div className="season">
                  <img src={require("../../images/seasons/season2.jpg")}  alt="" />
                  <div className="season_info">
                    <h2>Season 2</h2>
                    <p>
                      Ertugrul is captured by the Mongols. After escaping, his return to
                      the tribe creates internal strife with his cousin Tugtekin.
                      Meanwhile, Ertugrul's long-lost brother appears. The Kayi tribe
                      splits as Ertugrul and a group journey to West Anatolia, leaving the
                      rest of the tribe.
                    </p>
                  </div>
                </div>
                <div className="season">
                  <img src={require("../../images/seasons/season3.jpg")}  alt="" />
                  <div className="season_info">
                    <h2>Season 3</h2>
                    <p>
                      The Cavdar tribe, the most powerful in western Anatolia, deal with
                      Ertugrul's arrival. Deceit and manipulation manifest and a
                      leadership struggle ensues. To strengthen ties, Turgut Alp marries
                      Aslihan from the Cavdar. But danger lurks as Emir Sadettin Kopek
                      plots a trap for Ertugrul.
                    </p>
                  </div>
                </div>
                <div className="season">
                  <img src={require("../../images/seasons/season4.jpg")}  alt="" />
                  <div className="season_info">
                    <h2>Season 4</h2>
                    <p>
                      As the Kayi tribe mourn Ertugrul's suspected death, Dundar becomes
                      the bey. But Ertugrul returns, banishes Dundar and declares war on
                      the Byzantines. The Sultan is poisoned by Kopek and dies in
                      Ertugrul's hands. In a final showdown, Ertugrul fights Kopek and
                      Osman's birth is a bittersweet occasion.
                    </p>
                  </div>
                </div>
          
                <div className="season">
                  <img src={require("../../images/seasons/season5.jpg")}  alt="" />
                  <div className="season_info">
                    <h2>Season 5</h2>
                    <p>
                      <bdi>
                      Ten years after the Battle of Kosedag, the Mongols control the
                      Seljuk state. A spy is sent to gain information on Ertugrul's
                      rebellious plans but falls in love with him. Meanwhile, an assassin
                      works with the Mongols to wipe out the Oguz tribes.
                      </bdi>
                    </p>
                  </div>
                </div>
              </div>
            )
    }
    
}
export default Seasons;
