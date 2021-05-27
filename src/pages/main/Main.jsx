import React, { Component } from 'react';
import './Main.scss';
import PageCards from '../../components/main/PageCards';

class Main extends Component {
  state = {
    cardElements: [
      {
        id: 1,
        title: '学校内部',
        img: '/images/inschoolicon.svg',
        link: '/insideschool',
      },
      {
        id: 2,
        title: '学校外部',
        img: '/images/outschoolicon.svg',
        link: '/outsideschool',
      },
      {
        id: 3,
        title: '学校日程',
        img: '/images/calendaricon.svg',
        link: '/academiccalender',
      },
      {
        id: 4,
        title: '讲义评价',
        img: '/images/classevalicon.svg',
        link: '/classevaluation',
      },
    ],
  };

  render() {
    return (
      <>
        <div className="mainContainer">
          <div className="title">
            <img alt="Logo" src="/images/그림3.png" className="titleText" />
          </div>
          <div>
            <div className="cardContainer">
              <PageCards cardElements={this.state.cardElements} />
            </div>
            <div className="teamIntro">
              CUK共 打(da)
              call是"中国投资和通商Capstone设计"课程的学生聚集的团队。
              <br />
              我们在采访中国留学生的过程中发现，
              <span className="highlight">
                COVID-19导致中国留学生在学校生活中感到孤独。
              </span>
              <br />
              在异国他乡的生活中，经历着语言不通的种种困难的中国留学生的苦衷，从一起上学的立场来看，是一定要解决的问题。
              <br />
              <br />
              CUK共 打(da) call
              <span className="highlight">
                为了帮助中国留学生顺利适应学校生活，制定了可以自行修改的《天主教大学指南》。
              </span>
              <br />
              该网站的用户可一眼确认学校内部建筑的名称和位置，并可确认学校周边有哪些餐厅和咖啡厅，授课所需物品等。
              <br />
              不仅如此，通过学校授课信息和作业与否等自身授课评价功能，在听课前可以提前确认自己听课的信息。
              <br />
              <br />
              CUK共 打（da）call 给中国朋友成功的留学生活 应援！
            </div>
          </div>
          <div className="background"></div>
        </div>
      </>
    );
  }
}

export default Main;
