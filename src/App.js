//   \\\\\\\\\\ Dependencies \\\\\\\\\\\\
import React from "react";

//   \\\\\\\\\\ component \\\\\\\\\\\\
import _roundBtn from "./component/round-btn";
// import _hMenu from "./component/humberger-menu";

//   \\\\\\\   my  png  \\\\\\\\\\\\\
import logo from "./img/logo.png";
import menu from "./img/menu.png";
import design from "./img/design.png";
import coding from "./img/coding.png";
import apps from "./img/apps.png";
import project from "./img/project.png";
import coffee from "./img/coffee.png";
import mail from "./img/mail.png";
import awards from "./img/awards.png";
import logo1 from "./img/logo-1.png";
import logo2 from "./img/logo-2.png";
import logo3 from "./img/logo-3.png";
import logo4 from "./img/logo-4.png";
import message from "./img/message.png";
import email from "./img/info-mail.png";
import adress from "./img/address.png";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import dribble from "./img/dribble.png";
import google from "./img/google.png";
import youtube from "./img/youtube.png";
import arrow from "./img/arrow.png";

//\\\\\\\\\   my-style     \\\\\\\\\\\
import "./sass/main.scss";

function App() {
  return (
    <div className="body">
      {/* ------------------------------------------
			//?----->   This is All in Dark Heading <-----
			------------------------------------------ */}
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
            
          </div>
          <div className="menu">
            <img
              onClick={function () {
                var menu = document.getElementsByClassName("my-links");
                if (menu.style.display === "block") {
                  menu.style.display = "none";
                } else {
                  menu.style.display = "block";
                }
              }}
              src={menu}
              alt=""
            />
          </div>
        </nav>
        <div className="header-box">
          <div className="header-descrip">
            <h1>
              Wake the <br />
              design
            </h1>
            <div className="p-h">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente minima iure nam harum, facere unde id? Placeat
                obcaecati minus maxime tenetur explicabo, dolore molestias
                temporibus? Quas tenetur modi dicta cum.
              </p>
            </div>
            {/*   // todo: change <a> class who-we-are to <_roundBtn/>   \/
             */}

            {/* <a className="who-we-are" href="#">
              who we are ?
            </a> */}
            <_roundBtn text="who we are ?" />

            {/*   // todo: change <a> class who-we-are to <_roundBtn/>   /\
             */}
          </div>
        </div>
      </header>
      {/* ---------------------------------------
	   //?---------> YELLOW Box  <-----------
		------------------------------------------ */}
      <div className="yellow-box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, vitae.
          Dolorum numquam incidunt consectetur! Magnam, ab fugit in vero earum
          beatae debitis recusandae sequi iste, pariatur incidunt, excepturi
          dolore voluptatibus.
        </p>
      </div>

      {/*--------------------------------------------------------------
				//?----> This is first Container {design} {coding} {apps} <--- 
				-------------------------------------------------------------------*/}
      <div className="container">
        <div className="item-group">
          <img src={design} alt="design" />
          <h2>design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt
            fugit impedit unde exercitationem corrupti similique ipsam velit,
            obcaecati placeat, sequi ab, veritatis in? Quam, odit aut? Ipsa, cum
            sit?
          </p>
        </div>
        <div className="item-group">
          <img src={coding} alt="coding" />
          <h2>coding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            veritatis odio illo perspiciatis rerum eum dicta natus suscipit
            autem consequuntur quo, eligendi cupiditate repudiandae inventore
            eveniet rem architecto, explicabo veniam!
          </p>
        </div>
        <div className="item-group">
          <img src={apps} alt="apps" />
          <h2>apps</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            labore sint impedit, perspiciatis et earum nostrum nobis! Provident
            maiores voluptatibus asperiores eius possimus, placeat facere nobis
            cumque pariatur in incidunt.
          </p>
        </div>
      </div>
      {/*--------------------------------------------------------------
				//?----> This is first Container {BUTTON} <--- 
				-------------------------------------------------------------------*/}
      <div className="center-btn">
        {/* <a href="#">LUNCH the Project</a> */}
        <_roundBtn text="lunch the project" />
      </div>
      {/*--------------------------------------------------------------
				//?----> This is 2 Container {project} {coffee} {mail} {AWARDE} <--- 
				-------------------------------------------------------------------*/}

      <div className=" container-dark">
        <div className="item-group2">
          <img src={project} alt="project" />
          <h2>345</h2>
          <h3>completed projects</h3>
        </div>
        <div className="item-group2">
          <img src={coffee} alt="coffee" />
          <h2>982</h2>
          <h3>drinked coffee</h3>
        </div>
        <div className="item-group2">
          <img src={mail} alt="mail" />
          <h2>522</h2>
          <h3>mails sent</h3>
        </div>
        <div className="item-group2">
          <img src={awards} alt="awards" />
          <h2>129</h2>
          <h3>awards taken</h3>
        </div>
      </div>
      {/*--------------------------------------------------------------
				//?----> WORKS SO FAR....... <--- 
        -------------------------------------------------------------------*/}
      <div className="so-far">
        <div className="item-group">
          <h1>works so far...</h1>
        </div>
        <div className="item-group">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, enim
            ut iusto quasi eius aspernatur esse soluta reiciendis nostrum
            quaerat ipsum doloribus voluptas facilis provident distinctio modi
            rem iste placeat?
          </p>
        </div>
        <div className="item-group button-group">
          <a href="#">All</a>
          <a href="#">Design</a>
          <a href="#">Code</a>
          <a href="#">Pothograghy</a>
          <a href="#">Apps</a>
        </div>
      </div>
      {/*--------------------------------------------------------------
				//?---->   image show    <--- 
        -------------------------------------------------------------------*/}
      <div className="image-show">
        <div className="row">
          <div className="first-el"></div>
          <div className="column">
            <div className="row">
              <div className="row-item ru1"></div>
              <div className="row-item ru2"></div>
            </div>
            <div className="row">
              <div className="row-item rd1"></div>
              <div className="row-item rd2"></div>
              <div className="row-item rd3"></div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------
				//?---->   button   <--- 
        -------------------------------------------------------------------*/}
      <div className="center-btn">
        <a href="#">load more projects</a>
      </div>
      {/*--------------------------------------------------------------
				//?---->        OUR clients        <--- 
        -------------------------------------------------------------------*/}
      <div className="client">
        <div className="column">
          <h1>OUr clients...</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            eveniet, fugit quaerat voluptates laudantium officiis. Qui pariatur
            dolor officiis vero corrupti atque. Cupiditate animi quisquam fugit
            laboriosam omnis quibusdam quaerat.
          </p>
          <div className="logo-slider">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
          <div className="slider-btn">
            <div>
              <a href=""></a>
            </div>
            <div>
              <a href=""></a>
            </div>
            <div>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------
				//?---->        CONTACT US       <--- 
        ----------------------------------------------------------------*/}
      <div className="contact-us">
        <div className="item-group">
          <h1>Contact us...</h1>
        </div>
        <div className="item-group">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            perferendis illo sequi voluptates tempore consectetur vitae culpa
            aspernatur vero accusantium quos magnam deleniti, molestias
            repellendus asperiores nesciunt itaque veniam explicabo!
          </p>
        </div>
        <div className="item-group form">
          <form action="">
            <div className="row">
              <input className="name" type="text" placeholder="Name" />
              <input className="mail" type="text" placeholder="Mail" />
            </div>
            <input className="subject" type="text " placeholder="Subject" />
            <input className="message" type="text" placeholder="Message" />
            <input className="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
      {/*-----------------------------------------------------------
				//?---------->    |||    INfo    ||||    <--------------------------- 
        -------------------------------------------------------------------*/}
      <div className="info">
        <div className="item-group">
          <img src={message} alt="" />
          <h2>982-945-9895</h2>
        </div>
        <div className="item-group">
          <img src={email} alt="" />
          <h2>samycrip10@gmail.com</h2>
        </div>
        <div className="item-group">
          <img src={adress} alt="" />
          <h2>4 gholhak tehran Iran</h2>
        </div>
      </div>
      {/*-----------------------------------------------------------
			        	//?---------->    ||||  COPY RIGHT ||||      <--------------------------- 
                ------------------------------------------------------------*/}
      <div className="copy-right">
        <h1>
          &copy; 2019 - <span>POKER FACE VII</span> all right reserve
        </h1>
        <div className="social">
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={dribble} alt="dribble" />
          </a>
          <a href="">
            <img src={google} alt="google" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" />
          </a>
        </div>

        <img src={arrow} alt="go-up" className="go-up" />
      </div>
    </div>
  );
}

export default App;
