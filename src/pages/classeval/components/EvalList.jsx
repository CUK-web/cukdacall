import React, { Component } from 'react';
import EvalTabs from './EvalTabs';

class EvalList extends Component {
  state = {
    evalElements: [
      {
        id: 1,
        name: '경영학원론',
        prof: '코지',
        subjnum: '12-34',
      },
      {
        id: 2,
        name: '회계학원론',
        prof: '순이',
        subjnum: '34-12',
      },
      {
        id: 3,
        name: '코인학개론',
        prof: '가주아',
        subjnum: '56-78',
      },
      {
        id: 4,
        name: '투자론',
        prof: '공매도',
        subjnum: '78-56',
      },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.evalElements.map(subject => (
          <EvalTabs key={subject.id} subject={subject} />
        ))}
      </ul>
    );
  }
}

export default EvalList;
