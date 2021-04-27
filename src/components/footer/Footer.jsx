import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerLogo">
          <img src="/images/school.png" alt="img" className="teamImg" />
          <img src="/images/school.png" alt="img" className="logoImg" />
        </div>
        <div className="footerContents">
          <p className="footerHeader"> CUKDACALL</p>
          <div className="addressContainer">
            <p className="addressInfo">성심교정</p>
            <p className="address">
              14662 경기도 부천시 지봉로 43 (TEL) 02-2164-4114
            </p>
          </div>
          <p className="copyright">
            Copyright © The Catholic University of Korea All rights reserved.
          </p>
        </div>
        <div className="social">
          <img src="/images/facebook.png" alt="Facebook" className="facebook" />
          <img
            src="/images/instagram.png"
            alt="instagram"
            className="instagram"
          />
          <img src="/images/blog.png" alt="blog" className="blog" />
          <img src="/images/youtube.png" alt="youtube" className="yotube" />
        </div>
      </footer>
    );
  }
}
