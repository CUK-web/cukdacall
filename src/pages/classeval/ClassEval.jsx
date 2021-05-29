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
      <div className="evalContainer">
        <div className="formTitle">
          {/* <h4> */}
          <a href="https://forms.gle/vhGjJhn1YARv1SkS7">Tell me your thing!</a>
          {/* </h4> */}
        </div>

        <div className="evalListTab">
          <div className="btnContainer">
            {evalElements.map(subject =>
              subject.id !== 0 ? (
                <Button
                  variant="primary"
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
    );
  }
}

export default ClassEval;
