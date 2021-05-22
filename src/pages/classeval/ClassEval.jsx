import React, { Component } from 'react';
import './ClassEval.scss';
import SubjInfo from '../../components/classeval/SubjInfo';
import { Button } from 'react-bootstrap';
import { evalElements } from '../../utils/data';

class ClassEval extends Component {
  state = { currentId: 1 };

  clickHandler = id => {
    this.setState({ currentId: id });
    window.scrollTo({ left: 0, top: 0 });
  };

  render() {
    return (
      <div className="totalContainer">
        <div className="evalContainer">
          <div className="evalListTab">
            <div className="btnContainer">
              {evalElements.map(subject =>
                subject.id !== 0 ? (
                  <Button
                    variant="primary"
                    onClick={() => this.clickHandler(subject.id)}
                  >
                    {subject.name} <br />({subject.prof})
                  </Button>
                ) : null
              )}
            </div>
            <div className="line"></div>
            {evalElements.map(subject =>
              this.state.currentId === subject.id ? (
                <SubjInfo subject={subject} />
              ) : null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassEval;
