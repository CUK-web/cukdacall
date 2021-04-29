import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
import TabMenu from './components/TabMenu/TabMenu';
// import Description from './components/Description';
// import ContentsTabs from './components/ContentsTabs';
// import PlacePhoto from './components/PlacePhoto';
// import PlaceText from './components/PlaceText';
// import OutSchoolContainer from '../outSchoolContainer/outSchoolContainer';
import './OutSchool.scss';

export default class outSchool extends Component {
  render() {
    return (
      <>
        <Nav />

        <div className="outSchool">
          <TabMenu />

          {/* <section className="outSchoolContainer">
          <header className="description">
            <Description />
          </header>
          <section className="outSchoolContents">
            <article className="contentsTabsBox">
              <ContentsTabs />
            </article>
            <article className="contentsBox">
              <PlacePhoto />
              <PlaceText />
            </article>
          </section>
        </section> */}
        </div>
      </>
    );
  }
}
