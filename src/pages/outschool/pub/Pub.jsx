import React, { Component } from 'react';
import Description from '../components/Description';
import ContentsTabs from '../components/ContentsTabs';
import PlacePhoto from '../components/PlacePhoto';
import PlaceText from '../components/PlaceText';
import './Pub.scss';

export default class Pub extends Component {
  state = {
    tabcontents: [
      { id: 1, title: 'pub' },
      { id: 2, title: 'pub' },
      { id: 3, title: 'pub' },
      { id: 4, title: 'pub' },
      { id: 5, title: 'pub' },
    ],
  };
  render() {
    return (
      <div>
        <section className="outSchoolContainer">
          <header className="description">
            <Description />
          </header>
          <section className="outSchoolContents">
            <article className="contentsTabsBox">
              <ul className="contentsTabs">
                {this.state.tabcontents.map(menu => {
                  return (
                    <li key={menu.id} menu={menu} className="contentsMenu">
                      {menu.title}
                    </li>
                  );
                })}

                {/* <li className="contentsMenu"></li> */}
              </ul>
              {/* <ContentsTabs /> */}
              {/* {this.state.tabcontents.map((menu) => {
                return (
                  <li key= {menu.id} menu=[munu] className="contentsMenu">
                );
              })} */}
              {/* <ContentsTabs
                  key={menu.id}
                  menu={menu}
                  onClick={() => this.handleClick}
                />
              ))} */}
            </article>
            <article className="contentsBox">
              <PlacePhoto />
              <PlaceText />
            </article>
          </section>
        </section>
      </div>
    );
  }
  //   return (
  //     <div>
  //       dd
  //       <section className="outSchoolContainer">
  //         <header className="description">
  //           <Description />
  //         </header>
  //         <section className="outSchoolContents">
  //           <article className="contentsTabsBox">
  //             <ContentsTabs />
  //           </article>
  //           <article className="contentsBox">
  //             <PlacePhoto />
  //             <PlaceText />
  //           </article>
  //         </section>
  //       </section>
  //     </div>
  //   );
  // }
}
