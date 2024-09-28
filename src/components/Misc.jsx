import React from 'react';
import logo from '../assets/logo.png'
import '../styles/misc.scss'

const Misc = () => {
  return (
    <div>
      {/* <div className='scroll'></div> */}
      <a href="/">
        <img className='cornerlogo' src={logo} alt="extreme left logo"/>      
      </a>

      <a id='rightcornerbutton' href="/franchise">Get a Franchise</a>
    </div>
  );
}

export default Misc;
