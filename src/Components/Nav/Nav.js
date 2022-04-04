import { Component } from "react"
import "./Nav.css"

class Nav extends  Component{ 
  scroll = (topTo) => {
    window.scrollTo({ behavior: "smooth", top: topTo });
  };
  nav_increase = () =>{
    let nav = document.querySelector("nav");
    if (window.scrollY > 670) {
        nav.classList.add("active");

    } else {
      nav.classList.remove("active");
    }
  };
  swich_lang = () => {
    let intro_content = document.querySelector(".intro .content"),
    nav_img = document.querySelector("nav img"),
    nav_ul = document.querySelector("nav ul"),
    about_info = document.querySelector(".about_info"),
    season_info = document.querySelectorAll(".season_info"),
    quote = document.querySelector(".quote"),
    subscribe_text = document.querySelector(".subscribe_text"),
    subscribe_input = document.querySelector(".subscribe_input"),
    warrior_active = document.querySelector(".warrior_active"),
    lang = "en",
    words = this.props.words,
    warriors_info = this.props.warriors_info,
    footer = document.querySelector("footer");
    document.body.classList.toggle("ar");
    if (document.body.classList.contains("ar")) {
      lang = "ar";
    } 
    else {
      lang = "en";
    }
 
  
  
    intro_content.innerHTML = `
      <span>${words.intro[0].span[`${lang}`]}</span>
      <h1>${words.intro[1].h1[`${lang}`]}</h1> 
      <p>${words.intro[2].p[`${lang}`]}</p>
      `;
    nav_img.src =require(`../../images/intro/logo-${lang}.png`);
    for (let i = 0; i < nav_ul.children.length; i++) {
        nav_ul.children[i].textContent = words.nav[1].li[i][lang];
    };
    about_info.innerHTML=`
    <span><bdi>${words.about_info[0].span[lang]}</bdi></span>
    <p><bdi>${words.about_info[0].p[lang]}</bdi></p>
    `;
    for (let i = 0; i <season_info.length; i++) {
      season_info[i].children[0].textContent = words.season_info[i].h2[lang];
      season_info[i].children[1].textContent = words.season_info[i].p[lang];
  
    }
    quote.children[0].children[1].textContent = words.quote_content[0].p[lang];//the quote
    quote.children[1].textContent = words.quote_content[0].span[lang];//guote from
    let ul_warriors_list = document.querySelector(".ul_warriors_list");
    for (let i = 0; i < warriors_info.length; i++) {
      if (ul_warriors_list.children[1].children[1].textContent === warriors_info[i].name[`en`]) {
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
  subscribe_text.innerHTML = `
          <span><bdi>${words.subscribe_content[0].span[lang]}</bdi></span>
          <p>${words.subscribe_content[0].p[lang]}</p>
  `;
  subscribe_input.children[0].setAttribute("placeholder",`${words.subscribe_content[0].placeholder[lang]}`);
  footer.children[0].children[0].src = require(`../../images/intro/logo-${lang}.png`);

  for (let i = 0; i < footer.children[0].children[1].children.length; i++) {
    footer.children[0].children[1].children[i].textContent = words.nav[1].li[i][lang];
  };
  footer.children[1].children[0].textContent = words.footer[0].span[lang];
  footer.children[2].children[0].innerHTML = words.footer[0].rights[lang];
  
  };
    render(){      
      window.addEventListener("scroll",this.nav_increase);
            return(
                <nav >
                <img src={require("../../images/intro/logo-en.png")} alt="" />
                <ul>
                  <li class="li_about" onClick={() => this.scroll(670)}>About</li>
                  <li class="li_seasons" onClick={() => this.scroll(1265)}>Seasons</li>
                  <li class="li_quote" onClick={() => this.scroll(1810)}>Quote</li>
                  <li class="li_warriors" onClick={() => this.scroll(2300)}>Warriors</li>
                  <li class="li_subscribe" onClick={() => this.scroll(3000)}>Subscribe</li>
                </ul>
                <select onChange={this.swich_lang}>
                  <option value="en">En</option>
                  <option value="ar">Ar</option>
                </select>
                </nav> 
            )
    }
    
}
export default Nav;
