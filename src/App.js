import React from 'react';
import './App.css';
import Bgd from './img/Bgd_img.jpg';
import My from './img/my_img.png';

import {useTypewriter, Cursor} from 'react-simple-typewriter';
function App() {
  const {multiText} = useTypewriter({
              words: ['Developer','Designer','Coder'],
              loop: {},
              typeSpeed: 100,
              delaySpeed: 40
            })
  return (
    
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      </head>
      
        <div class="wrapper">
            <nav class="navbar">
                <div class="logo">
                    <span>Logo</span>
                </div>
                <div class="nav">
                  <div class="nav-menu" id="navMenu0">
                    <ul class="link_list">
                      <div class="close_menu">
                        <i class="fa fa-times" onClick="menuClose();"></i>
                      </div>
                        <li class="list">
                          <a href="#" class='link'>HOME</a>
                        </li>
                        <li class="list">
                          <a href="#" class='link'>SERVICES</a>
                        </li>
                        <li class="list">
                          <a href="#" class='link'>BLOG</a>
                        </li>
                        <li class="list">
                          <a href="#" class='link'>ABOUT</a>
                        </li>
                        <li class="list">
                          <a href="#" class='link'>CONTACT</a>
                        </li>
                    </ul>
                  </div>
                  <div>
                    <a href ="#" class="btn"><i class="fa fa-download"></i><span>Download CV</span></a>
                  </div>
                  <div class="mode">
                    <div class="moon-sun" id="toggle-switch">
                      <i class ="fa fa-moon" id="moon"></i>
                      <i class="fa fa-sun" id="sun"></i>
                    </div>
                    <div class="nav_menu_btn">
                      <i class="fa fa-bars" onclick="myMenuFunction();"></i>
                    </div>
                  </div>
                </div>
            </nav>
            <main>
              <div class="col col-1">
                <div class="hero_box">
                  <div class="hello">
                    <p>Hello I'm</p>
                  </div>
                  <div class="headline">
                    <span class="multiText"></span>
                    <span style={{fontWeight: 'bold', color: 'geeen'}}>
                      {multiText}
                    </span>
                    <span style={{color:'red'}}>
                      <Cursor/>
                    </span>
                  </div>
                  <div class="hello_p">
                    <p>My name is CHANUKA NADUN, I'm web developer with over 1 year experience.</p>
                  </div>
                  <div class="social_icons">
                    <div class="icon_circle"></div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <a href="#" class="fa fa-facebook icon"></a>
                    <a href="#" class="fa fa-twitter icon"></a>
                    <a href="#"  class="fa fa-linkedin-square icon"></a>
                    <a href="#" class="fa fa-whatsapp icon"></a>
                  </div>
                  <div class="hero_btn">
                    <button class="btn_1">Hire me</button>
                    <button class="btn_2"><a href="#">Download CV</a></button>
                  </div>
                </div>
              </div>
            </main>
            <div class="images">
              <img src={Bgd} height={200} alt="" class="bg"/>
              <img src={My} alt="" class="boy"/>
            </div>
            
        </div>
        
      
        
       

    </div>
  );
}

export default App;
