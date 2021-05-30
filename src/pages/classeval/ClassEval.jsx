import React, { Component } from 'react';
import './ClassEval.scss';
import SubjInfo from '../../components/classeval/SubjInfo';
import { Button } from 'react-bootstrap';
import { evalElements } from '../../utils/data';

const latestEvalClass = evalElements.reverse();

class ClassEval extends Component {
  state = { currentId: latestEvalClass.length };
  clickHandler = id => {
    this.setState({ currentId: id });
    window.scrollTo({ left: 0, top: 0 });
  };

  render() {
    return (
      <div className="evalContainer">
        <div className="formTitle">
          <a href="https://forms.gle/vhGjJhn1YARv1SkS7">To do a survey</a>
        </div>

        <div className="evalListTab">
          <div className="btnContainer">
            {latestEvalClass.map(subject => (
              <Button
                variant="primary"
                key={subject.id}
                onClick={() => this.clickHandler(subject.id)}
                className={
                  this.state.currentId === subject.id
                    ? 'selected'
                    : 'unselected'
                }
                active={this.state.currentId === subject.id ? true : false}
              >
                {subject.name} <br />({subject.prof})
              </Button>
            ))}
          </div>
          <div className="line"></div>
          {evalElements.map(subject =>
            this.state.currentId === subject.id ? (
              <SubjInfo subject={subject} key={subject.id} />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default ClassEval;
