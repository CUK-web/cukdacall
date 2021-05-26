import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './AcademCal.scss';

class AcademCal extends Component {
  localizer = momentLocalizer(moment);
  myEventsList = [
    {
      start: new Date(2021, 2, 1),
      end: new Date(2021, 2, 1),
      title: '受礼仪式（圣神）',
    },
    {
      start: new Date(2021, 2, 2),
      end: new Date(2021, 2, 2),
      title: '第一学期开讲',
    },
    {
      start: new Date(2021, 2, 2),
      end: new Date(2021, 2, 8),
      title: '选课申请变更期间',
    },
    {
      start: new Date(2021, 2, 8),
      end: new Date(2021, 2, 8),
      title: '医学科开讲（圣医',
    },
    {
      start: new Date(2021, 2, 8),
      end: new Date(2021, 2, 12),
      title: '追加登记时间（圣心）',
    },
    {
      start: new Date(2021, 2, 11),
      end: new Date(2021, 2, 11),
      title: '开讲式（圣心）',
    },
    {
      start: new Date(2021, 2, 29),
      end: new Date(2021, 2, 29),
      title: '授课天数 1/4(圣心)',
    },
    {
      start: new Date(2021, 3, 1),
      end: new Date(2021, 3, 5),
      title: '圣周礼仪实习（圣神）',
    },
    {
      start: new Date(2021, 3, 9),
      end: new Date(2021, 3, 9),
      title: '医学科 White Coat Ceremony（圣医）',
    },
    {
      start: new Date(2021, 3, 19),
      end: new Date(2021, 3, 23),
      title: '包括期中考试/综合考试（圣神）',
    },
    {
      start: new Date(2021, 3, 20),
      end: new Date(2021, 3, 26),
      title: '期中考试（圣心）',
    },
    {
      start: new Date(2021, 3, 26),
      end: new Date(2021, 3, 26),
      title: '授课天数 1/2(圣心)',
    },
    {
      start: new Date(2021, 4, 12),
      end: new Date(2021, 4, 13),
      title: '校庆（圣心）',
    },
    {
      start: new Date(2021, 4, 13),
      end: new Date(2021, 4, 13),
      title: '护理大学宣誓仪式（圣医）',
    },
    {
      start: new Date(2021, 4, 21),
      end: new Date(2021, 4, 21),
      title: '建校纪念仪式（圣心）',
    },
    {
      start: new Date(2021, 4, 24),
      end: new Date(2021, 4, 24),
      title: '授课天数 3/4（圣心）',
    },
    {
      start: new Date(2021, 4, 25),
      end: new Date(2021, 4, 25),
      title: '建校纪念日/阿兰节(圣神)',
    },
    {
      start: new Date(2021, 4, 29),
      end: new Date(2021, 4, 29),
      title: '三校区 攀登大会',
    },
    {
      start: new Date(2021, 5, 14),
      end: new Date(2021, 5, 18),
      title: '期末考试（圣神）',
    },
    {
      start: new Date(2021, 5, 15),
      end: new Date(2021, 5, 21),
      title: '期末考试（圣心）',
    },
    {
      start: new Date(2021, 5, 21),
      end: new Date(2021, 5, 21),
      title: '教授会议（圣心）',
    },
    {
      start: new Date(2021, 5, 21),
      end: new Date(2021, 5, 21),
      title: '暑假（圣神）',
    },
    {
      start: new Date(2021, 5, 22),
      end: new Date(2021, 5, 22),
      title: '暑假（圣心）',
    },
    {
      start: new Date(2021, 5, 22),
      end: new Date(2021, 6, 12),
      title: '假期课（圣心）',
    },
    {
      start: new Date(2021, 5, 28),
      end: new Date(2021, 5, 28),
      title: '成绩提交截止（圣心）',
    },
    {
      start: new Date(2021, 6, 1),
      end: new Date(2021, 6, 5),
      title: '确认成绩和错误更正（圣心）',
    },
    {
      start: new Date(2021, 6, 12),
      end: new Date(2021, 6, 16),
      title: '复习院 提交时间（圣心）',
    },
    {
      start: new Date(2021, 6, 27),
      end: new Date(2021, 6, 30),
      title: '选课期间（圣心）',
    },
    {
      start: new Date(2021, 7, 2),
      end: new Date(2021, 7, 27),
      title: '休学院 提交时间（圣心）',
    },
    {
      start: new Date(2021, 7, 19),
      end: new Date(2021, 7, 19),
      title: '秋季毕业仪式（圣心）',
    },
    {
      start: new Date(2021, 7, 20),
      end: new Date(2021, 7, 20),
      title: '秋季毕业仪式（圣神，圣医）',
    },
    {
      start: new Date(2021, 7, 23),
      end: new Date(2021, 7, 23),
      title: '医学系开讲（圣医）',
    },
    {
      start: new Date(2021, 7, 23),
      end: new Date(2021, 7, 27),
      title: '在校生登陆期间（圣心）',
    },
    {
      start: new Date(2021, 7, 27),
      end: new Date(2021, 7, 27),
      title: '教授会议（圣心）',
    },
    {
      start: new Date(2021, 7, 30),
      end: new Date(2021, 7, 30),
      title: '第2学期开学',
    },
    {
      start: new Date(2021, 7, 30),
      end: new Date(2021, 8, 3),
      title: '选课申请变更期间（圣心）',
    },
    {
      start: new Date(2021, 8, 6),
      end: new Date(2021, 8, 7),
      title: 'CAMEAD(圣医)',
    },
    {
      start: new Date(2021, 8, 6),
      end: new Date(2021, 8, 10),
      title: '追加登陆时间（圣心）',
    },
    {
      start: new Date(2021, 8, 7),
      end: new Date(2021, 8.7),
      title: '开讲式（圣心）',
    },
    {
      start: new Date(2021, 8, 26),
      end: new Date(2021, 8, 26),
      title: '授课天数 1/4 (圣心)',
    },
    {
      start: new Date(2021, 9, 1),
      end: new Date(2021, 9, 2),
      title: '阿拉马庆典（圣神）',
    },
    {
      start: new Date(2021, 9, 18),
      end: new Date(2021, 9, 22),
      title: '中期考试（圣神，圣心）',
    },
    {
      start: new Date(2021, 9, 18),
      end: new Date(2021, 9, 22),
      title: '本科毕业班传教实习（圣神）',
    },
    {
      start: new Date(2021, 9, 24),
      end: new Date(2021, 9, 24),
      title: '授课天数 1/2(圣心)',
    },
    {
      start: new Date(2021, 10, 2),
      end: new Date(2021, 10, 2),
      title: '慰灵日（圣神）',
    },
    {
      start: new Date(2021, 10, 21),
      end: new Date(2021, 10, 21),
      title: '上课天数 3/4（圣心）',
    },
    {
      start: new Date(2021, 11, 10),
      end: new Date(2021, 11, 10),
      title: '终讲仪式（圣神）',
    },
    {
      start: new Date(2021, 11, 13),
      end: new Date(2021, 11, 17),
      title: '期末考试（圣神，圣心）',
    },
    {
      start: new Date(2021, 11, 17),
      end: new Date(2021, 11, 17),
      title: '教授会议（圣心）',
    },
    {
      start: new Date(2021, 11, 20),
      end: new Date(2021, 11, 20),
      title: '寒假（圣神，圣心）',
    },
    {
      start: new Date(2021, 11, 20),
      end: new Date(2022, 0, 7),
      title: '假期课（圣心）',
    },
    {
      start: new Date(2021, 11, 24),
      end: new Date(2022, 11, 24),
      title: '成绩提交截止（圣心）',
    },
    {
      start: new Date(2021, 11, 27),
      end: new Date(2021, 11, 29),
      title: '成绩确认和错误更正（圣心）',
    },
    {
      start: new Date(2022, 0, 4),
      end: new Date(2022, 0, 4),
      title: '始务日',
    },
    {
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 14),
      title: '复习院提交时间（圣心）',
    },
    {
      start: new Date(2022, 1, 3),
      end: new Date(2022, 1, 28),
      title: '休学院提交时间（圣心）',
    },
    {
      start: new Date(2022, 1, 10),
      end: new Date(2022, 1, 4),
      title: '选课期间（圣心）',
    },
    {
      start: new Date(2022, 1, 10),
      end: new Date(2022, 1, 10),
      title: '春季毕业仪式（圣医）',
    },
    {
      start: new Date(2022, 1, 17),
      end: new Date(2022, 1, 17),
      title: '春季毕业仪式（圣心）',
    },
    {
      start: new Date(2022, 1, 21),
      end: new Date(2022, 1, 25),
      title: '在校生登陆期间（圣心）',
    },
    {
      start: new Date(2022, 1, 23),
      end: new Date(2022, 1, 23),
      title: '教授会议（圣心）',
    },
    {
      start: new Date(2022, 1, 25),
      end: new Date(2022, 1, 25),
      title: '春季毕业仪式（圣神）',
    },
    {
      start: new Date(2022, 1, 28),
      end: new Date(2022, 1, 28),
      title: '新生入学式',
    },
  ];
  render() {
    return (
      <>
        <div className="calContainer">
          <Calendar
            localizer={this.localizer}
            events={this.myEventsList}
            startAccessor="start"
            endAccessor="end"
            views={{ month: true, agenda: true }}
          />
        </div>
      </>
    );
  }
}

export default AcademCal;
