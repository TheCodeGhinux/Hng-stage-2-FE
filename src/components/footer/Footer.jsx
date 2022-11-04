import React from 'react';
import './footer.css'
import img from '../../assets/Zuri.Internship_Logo.png'
import img2 from '../../assets/I4G.png'

const Footer = () => {
  return (
    <div id='footer'>

      <div className="footer__con">
        <div className="zuri__img">
          <img src={img} alt="" />
        </div>
        <div className="footer__text">
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div className="i4g__img">
          <img src={img2} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Footer