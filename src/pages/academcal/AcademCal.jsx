import React, { Component } from 'react';
import Nav from '../../components/nav/Nav';
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
      title: '직수여식(성신)',
    },
    {
      start: new Date(2021, 2, 2),
      end: new Date(2021, 2, 2),
      title: '1학기 개강',
    },
    {
      start: new Date(2021, 2, 2),
      end: new Date(2021, 2, 8),
      title: '수강신청 변경기간(성신)',
    },
    {
      start: new Date(2021, 2, 8),
      end: new Date(2021, 2, 8),
      title: '의학과 개강(성의)',
    },
    {
      start: new Date(2021, 2, 8),
      end: new Date(2021, 2, 12),
      title: '추가 등록기간(성신)',
    },
    {
      start: new Date(2021, 2, 11),
      end: new Date(2021, 2, 11),
      title: '개강미사(성신)',
    },
    {
      start: new Date(2021, 2, 29),
      end: new Date(2021, 2, 29),
      title: '수업일수1/4(성신)',
    },
    {
      start: new Date(2021, 3, 1),
      end: new Date(2021, 3, 5),
      title: '성주간 전례실습(성신)',
    },
    {
      start: new Date(2021, 3, 9),
      end: new Date(2021, 3, 9),
      title: '의학과 White Coat Ceremony(성의)',
    },
    {
      start: new Date(2021, 3, 19),
      end: new Date(2021, 3, 23),
      title: '중간고사/종합시험포함(성신)',
    },
    {
      start: new Date(2021, 3, 20),
      end: new Date(2021, 3, 26),
      title: '중간고사(성심)',
    },
    {
      start: new Date(2021, 3, 26),
      end: new Date(2021, 3, 26),
      title: '수업일수 1/2(성심)',
    },
    {
      start: new Date(2021, 4, 12),
      end: new Date(2021, 4, 13),
      title: '아우름제(성심)',
    },
    {
      start: new Date(2021, 4, 13),
      end: new Date(2021, 4, 13),
      title: '간호대학 나이팅게일 선서식(성의)',
    },
    {
      start: new Date(2021, 4, 21),
      end: new Date(2021, 4, 21),
      title: '개교기념미사(성심)',
    },
    {
      start: new Date(2021, 4, 24),
      end: new Date(2021, 4, 24),
      title: '수업일수 3/4(성심)',
    },
    {
      start: new Date(2021, 4, 25),
      end: new Date(2021, 4, 25),
      title: '개교기념일/아람제(성신)',
    },
    {
      start: new Date(2021, 4, 29),
      end: new Date(2021, 4, 29),
      title: '세교정 한마음 친교 등반대회',
    },
    {
      start: new Date(2021, 5, 14),
      end: new Date(2021, 5, 18),
      title: '기말고사(성신)',
    },
    {
      start: new Date(2021, 5, 15),
      end: new Date(2021, 5, 21),
      title: '기말고사(성심)',
    },
    {
      start: new Date(2021, 5, 21),
      end: new Date(2021, 5, 21),
      title: '교수회의(성심)',
    },
    {
      start: new Date(2021, 5, 21),
      end: new Date(2021, 5, 21),
      title: '여름방학 시작 (성신)',
    },
    {
      start: new Date(2021, 5, 22),
      end: new Date(2021, 5, 22),
      title: '여름방학 시작 (성심)',
    },
    {
      start: new Date(2021, 5, 22),
      end: new Date(2021, 6, 12),
      title: '계절학기(성심)',
    },
    {
      start: new Date(2021, 5, 28),
      end: new Date(2021, 5, 28),
      title: '성적제출 마감(성심)',
    },
    {
      start: new Date(2021, 6, 1),
      end: new Date(2021, 6, 5),
      title: '성적확인 및 오류정정(성심)',
    },
    {
      start: new Date(2021, 6, 12),
      end: new Date(2021, 6, 16),
      title: '복학원 제출기간(성심)',
    },
    {
      start: new Date(2021, 6, 27),
      end: new Date(2021, 6, 30),
      title: '수강신청(성심)',
    },
    {
      start: new Date(2021, 7, 2),
      end: new Date(2021, 7, 27),
      title: '휴학원 제출기간(성심)',
    },
    {
      start: new Date(2021, 7, 19),
      end: new Date(2021, 7, 19),
      title: '가을 학위수여식(성심)',
    },
    {
      start: new Date(2021, 7, 20),
      end: new Date(2021, 7, 20),
      title: '가을 학위수여식(성신,성의)',
    },
    {
      start: new Date(2021, 7, 23),
      end: new Date(2021, 7, 23),
      title: '의학과 개강(성의)',
    },
    {
      start: new Date(2021, 7, 23),
      end: new Date(2021, 7, 27),
      title: '재학생 본 등록기간(성심)',
    },
    {
      start: new Date(2021, 7, 27),
      end: new Date(2021, 7, 27),
      title: '교수회의(성심)',
    },
    {
      start: new Date(2021, 7, 30),
      end: new Date(2021, 7, 30),
      title: '2학기 개강',
    },
    {
      start: new Date(2021, 7, 30),
      end: new Date(2021, 8, 3),
      title: '수강신청 변경기간(성심)',
    },
    {
      start: new Date(2021, 8, 6),
      end: new Date(2021, 8, 7),
      title: 'CAMEAD(성의)',
    },
    {
      start: new Date(2021, 8, 6),
      end: new Date(2021, 8, 10),
      title: '추가 등록기간(성심)',
    },
    {
      start: new Date(2021, 8, 7),
      end: new Date(2021, 8.7),
      title: '개강미사(성심)',
    },
    {
      start: new Date(2021, 8, 26),
      end: new Date(2021, 8, 26),
      title: '수업일수 1/4 (성심)',
    },
    {
      start: new Date(2021, 9, 1),
      end: new Date(2021, 9, 2),
      title: '알마축제(성신)',
    },
    {
      start: new Date(2021, 9, 18),
      end: new Date(2021, 9, 22),
      title: '중간고사(성신, 성심)',
    },
    {
      start: new Date(2021, 9, 18),
      end: new Date(2021, 9, 22),
      title: '학부졸업반 선교실습(성신)',
    },
    {
      start: new Date(2021, 9, 24),
      end: new Date(2021, 9, 24),
      title: '수업일수 1/2 (성심)',
    },
    {
      start: new Date(2021, 10, 2),
      end: new Date(2021, 10, 2),
      title: '위령의 날 (성인)',
    },
    {
      start: new Date(2021, 10, 21),
      end: new Date(2021, 10, 21),
      title: '수업일수 3/4(성심)',
    },
    {
      start: new Date(2021, 11, 10),
      end: new Date(2021, 11, 10),
      title: '종강미사(성신)',
    },
    {
      start: new Date(2021, 11, 13),
      end: new Date(2021, 11, 17),
      title: '기말고사(성신, 성심)',
    },
    {
      start: new Date(2021, 11, 17),
      end: new Date(2021, 11, 17),
      title: '교수회의(성심)',
    },
    {
      start: new Date(2021, 11, 20),
      end: new Date(2021, 11, 20),
      title: '겨울방학 시작(성신, 성심)',
    },
    {
      start: new Date(2021, 11, 20),
      end: new Date(2022, 0, 7),
      title: '계절학기(성심)',
    },
    {
      start: new Date(2021, 11, 24),
      end: new Date(2022, 11, 24),
      title: '성적제출 마감(성심)',
    },
    {
      start: new Date(2021, 11, 27),
      end: new Date(2021, 11, 29),
      title: '성적확인 및 오류정정(성심)',
    },
    {
      start: new Date(2022, 0, 4),
      end: new Date(2022, 0, 4),
      title: '시무미사(교목실)',
    },
    {
      start: new Date(2022, 0, 10),
      end: new Date(2022, 0, 14),
      title: '복학원 제출기간(성심)',
    },
    {
      start: new Date(2022, 1, 3),
      end: new Date(2022, 1, 28),
      title: '휴학원 제출기간(성심)',
    },
    {
      start: new Date(2022, 1, 10),
      end: new Date(2022, 1, 4),
      title: '수강신청(성심)',
    },
    {
      start: new Date(2022, 1, 10),
      end: new Date(2022, 1, 10),
      title: '봄 학위수여식(성의)',
    },
    {
      start: new Date(2022, 1, 17),
      end: new Date(2022, 1, 17),
      title: '봄 학위수여식(성심)',
    },
    {
      start: new Date(2022, 1, 21),
      end: new Date(2022, 1, 25),
      title: '재학생 본 등록기간(성심)',
    },
    {
      start: new Date(2022, 1, 23),
      end: new Date(2022, 1, 23),
      title: '교수회의(성심)',
    },
    {
      start: new Date(2022, 1, 25),
      end: new Date(2022, 1, 25),
      title: '봄 학위수여식(성신)',
    },
    {
      start: new Date(2022, 1, 28),
      end: new Date(2022, 1, 28),
      title: '신입생 입학미사',
    },
  ];
  render() {
    return (
      <>
        <Nav />
        <div className="calContainer">
          <Calendar
            localizer={this.localizer}
            events={this.myEventsList}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </>
    );
  }
}

export default AcademCal;
