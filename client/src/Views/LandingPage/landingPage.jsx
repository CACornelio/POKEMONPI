import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './landingpage.module.css';

const LandingPage = () => {
  useEffect(() => {
    // Add the 'landing-background' class to the body element
    document.body.classList.add(style['landing-background']);

    // Remove the 'landing-background' class when the component is unmounted
    return () => {
      document.body.classList.remove(style['landing-background']);
    };
  }, []);
///this code adds a class to the body element when the component is mounted, which applies the background image defined in the CSS module. The class is removed when the component is unmounted to clean up after the component.///
  return (
    <div>
      <div className={style.landing}>
       
        <Link to="/home">
          <button className={style.enterbutton}>Enter</button>
        </Link>
      </div>
      <div className={style.made}>
        <h1>Made by Carlos Cornelio FT-38a</h1>
      </div>
    </div>
  );
};

export default LandingPage;
