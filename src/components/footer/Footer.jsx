import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerContents">
          <p className="footerTeam"> Team CUK共 打(da)call</p>
          <p className="addressInfo">가톨릭대학교 성심교정</p>
          <p className="address">
            14662 경기도 부천시 지봉로 43 (TEL) 02-2164-4114
          </p>
          <p className="copyright">
            Copyright © The Catholic University of Korea All rights reserved.
          </p>
        </div>
        <div>
          {/* <img src="/images/school.png" alt="img" className="teamImg" /> */}
          <a href="https://www.catholic.ac.kr/index.do">
            <img src="/images/school.png" alt="img" className="logoImg" />
          </a>
        </div>

        <div className="socials">
          <a
            href="https://www.facebook.com/cuklove"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/lovecuk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/instagram.png"
              alt="instagram"
              className="instagram"
            />
          </a>
          <a
            href="https://blog.naver.com/ilovecuk"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/blog.png" alt="blog" className="blog" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCXCTZNby7FR4Ijb2_X8X_mA"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/youtube.png" alt="youtube" className="yotube" />
          </a>
        </div>
      </footer>
    );
  }
}
