import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  state = {
    data: [
      { title: '学校内部', link: '/insideschool' },
      { title: '学校外部', link: '/outsideschool' },
      { title: '学校日程', link: '/academiccalender' },
      { title: '讲义评价', link: '/classevaluation' },
    ],
  };
  clickHandler = () => {
    window.scrollTo({ left: 0, top: 0 });
    this.setState({});
  };
  render() {
    return (
      <nav className="navContainer">
        <div className="navLogoBox">
          <div className="test">
            <Link to="/">
              <img alt="Logo" src="/images/그림3.png" className="navLogoImg" />
            </Link>
          </div>
        </div>
        <div className="navTitle">
          <ul className="navList">
            {this.state.data.map((menu, idx) => {
              return (
                <Link
                  to={menu.link}
                  key={idx}
                  onClick={() => this.clickHandler()}
                >
                  <li
                    className={
                      window.location.pathname === menu.link
                        ? 'selected'
                        : 'unselected'
                    }
                  >
                    {menu.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}
