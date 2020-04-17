import React from 'react';
import htmlLogo from "../Images/htmlLogo.png"
import cssLogo from "../Images/cssLogo.png"
import javascriptLogo from "../Images/javascriptLogo.png"
import nodeLogo from "../Images/nodeLogo.png"
import vscLogo from "../Images/vscLogo.png"
import sassLogo from "../Images/sassLogo.png"
import reactLogo from "../Images/reactLogo.png"
import githubLogo from "../Images/gitLogo.png"
import Artslider from "../Components/ArtSlider"

const Home = () => (
    <div>
      <div id='starWarsIntro'>
        <p>the star wars like floating text intro</p>
      </div>
      <Artslider />
      <div className='pageText'>
        <p id='homeTextHeader'>Welcome to my portfolio website</p>
        <br />
        <p>
          My name is Timothy Blom, and this is my portefolio website. 
          <br />
          Feel free to look arround, use the Navigation menu in the top left to go to other pages or play with the settings in the Options menu on the top right.
          You can also use the social media buttons on the bottom right to visit my social media pages.
        </p>
        <p>
          Thank you for visiting my website. I build this website to learn, to play with my new coding superpowers and to show off what I can create. 
        </p>
      </div>
      <div className='homeFooter'>
        <p>
            I build this website with the following programs:
        </p>
        <div className='homeIconsContainer'>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={htmlLogo} />
            <p className='iconName'> HTML5 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon' alt='' src={cssLogo} />
            <p className='iconName'> CSS3 </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={sassLogo} />
            <p className='iconName'> SASS </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={javascriptLogo} />
            <p className='iconName'> Javascript </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={reactLogo} />
            <p className='iconName'> Javascript React </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={vscLogo} />
            <p className='iconName'> Visual Studio Code </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={nodeLogo} />
            <p className='iconName'> Node.js </p>
          </div>
          <div className='homeIconDiv'>
            <img className='programIcon'alt='' src={githubLogo} />
            <p className='iconName'> Git </p>
          </div>
        </div>
        </div>
    </div>
);

export default Home;