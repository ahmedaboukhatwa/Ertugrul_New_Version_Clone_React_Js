import { Component } from "react";
import "./Warriors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
class Warriors extends Component {
  btn_next = () => {
    let warrior_width = 300,
      {warriors_info,lang} = this.props,
      ul_warriors_list = document.querySelector(".ul_warriors_list"),
      select = document.querySelector("select"),
      warrior_active = document.querySelector(".warrior_active");
      lang = select.value;
      ul_warriors_list.animate([{ marginLeft: `-${warrior_width * 2}px` }], {
      duration: 350,
      fill: "forwards",
    });

    setTimeout(function () {
      ul_warriors_list.appendChild(ul_warriors_list.children[0]);

      ul_warriors_list.animate([{ marginLeft: `-${warrior_width}px` }], {
        duration: 0.00001,
        fill: "forwards",
      });
    }, 350);

    for (let i = 0; i < warriors_info.length; i++) {
      if (ul_warriors_list.children[2].children[1].textContent === warriors_info[i].name[`en`]) {
          warrior_active.innerHTML = `
            <div class="warrior_img">
            <img src="${require("../../"+ warriors_info[i].img)}" alt="">
            </div>
            <div class="warrior_info">
              <span>${warriors_info[i].name[`${lang}`]}</span>
              <p>${warriors_info[i].info[`${lang}`]}</p>
            </div>  
          `;
      }
    }
  }
  btn_previous = () =>{
    let warrior_width = 300,
    {warriors_info,lang} = this.props,
    ul_warriors_list = document.querySelector(".ul_warriors_list"),
    warrior_last_child = ul_warriors_list.children.length - 1,
    select = document.querySelector("select"),
    warrior_active = document.querySelector(".warrior_active");
    lang = select.value;

    ul_warriors_list.animate([{ marginLeft: `0px` }], {duration: 350,fill:"forwards"});
    
    setTimeout(function () {
      ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
      
      ul_warriors_list.animate([{ marginLeft: `-${warrior_width}px` }], {duration: .00001,fill:"both"});
    },350);

    for (let i = 0; i < warriors_info.length; i++) {
        if (ul_warriors_list.children[0].children[1].textContent === warriors_info[i].name[`en`]) {
    
            warrior_active.innerHTML = `
            <div class="warrior_img">
            <img src="${require("../../"+ warriors_info[i].img)}" alt="">
            </div>
            <div class="warrior_info">
            <span>${warriors_info[i].name[`${lang}`]}</span>
            <p>${warriors_info[i].info[`${lang}`]}</p>
            </div>
            
            `;
        
        }    
    }
    
  }
  ul_warriors_list_click = (e) =>{
    let {warriors_info,lang} = this.props,
    select = document.querySelector("select"),
    warrior_active = document.querySelector(".warrior_active");
   

    for (let i = 0; i < warriors_info.length; i++) {
      lang = select.value;
      if (e.target.nextElementSibling.textContent === warriors_info[i].name["en"]) {
        warrior_active.innerHTML = `
            <div class="warrior_img">
            <img src="${require("../../"+ warriors_info[i].img)}" alt="">
            </div>
          <div class="warrior_info">
            <span>${warriors_info[i].name[`${lang}`]}</span>
            <p>${warriors_info[i].info[`${lang}`]}</p>
          </div>
          
          `;
      }
    }
  };
  render() {
    let {warriors_info} = this.props,
    lang = "en",
    warriors_map = warriors_info
        .map( e => {
          return (
          <li className="warrior" key={e.id}>
          <img src={require(`../../${e.img}`)} alt=""/>
          <span>{e.name[`${lang}`]}</span>
          <span>{e.info[`${lang}`]}</span>
          </li>
          );
        });

        window.onload = function() {
        let ul_warriors_list_width ,
        ul_warriors_list = document.querySelector(".ul_warriors_list"),
        warrior_last_child = ul_warriors_list.children.length - 1,
        warrior_width = 300,
        select = document.querySelector("select"),
        lang = select.value,
        warrior_active = document.querySelector(".warrior_active");

        warrior_active.innerHTML = `
        <div class="warrior_img">
        <img src="${require("../../"+ warriors_info[0].img)}" alt="">
      </div>
      <div class="warrior_info">
        <span>${warriors_info[0].name[`${lang}`]}</span>
        <p>${warriors_info[0].info[`${lang}`]}</p>
      </div>
      
      `;      
      ul_warriors_list_width = warrior_width * ul_warriors_list.children.length;
      ul_warriors_list.style.width = `${ul_warriors_list_width}px`;
      ul_warriors_list.prepend(ul_warriors_list.children[warrior_last_child]);
      ul_warriors_list.style.marginLeft = `-${warrior_width}px`; 
      
      
      };

    return (
      <div className="warriors">
        <div className="warrior_active">
          {/* <div className="warrior_img">
            <img
              src={require("../../images/warriors/ERTUGRUL BEY.jpg")}
              alt=""
            />
          </div>
          <div className="warrior_info">
           
          
          </div> */}
        </div>
        <div className="warriors_control">
          <button className="btn_previous" onClick={this.btn_previous}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="visible_warriors">
            <ul className="ul_warriors_list" onClick={this.ul_warriors_list_click}>
            {warriors_map}
            </ul>
          </div>
          <button className="btn_next" onClick={this.btn_next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}
export default Warriors;
