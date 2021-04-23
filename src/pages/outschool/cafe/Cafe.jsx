import React, { Component } from 'react';
import Description from '../components/Description';
import ContentsTabs from '../components/ContentsTabs';
import PlacePhoto from '../components/PlacePhoto';
import PlaceText from '../components/PlaceText';

export default class Cafe extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="outSchoolContainer">
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
          </section>
        </div>
      </div>
    );
  }
}
