# CUK共 打(da) call Project

<br>

## 프로젝트 기간

- 2021.04.19 ~ 2021.05.14

<br>

## 프로젝트 팀원

- 김연주(Frontend)
- 문재석(Frontend)

<br>


## 프로젝트 기술스택

- HTML/CSS(SASS), JS
- React (React Router, CRA, React-Big-Calendar, BootStrap)
- Vercel

<br>


## 프로젝트 소개

**CUK共 打(da) call** 은 '중국 투자와 통상 캡스톤 디자인' 과목을 수강하는 학생들이 모인 팀입니다. <br />
우리는 학교에 있는 중국 유학생들과 인터뷰 하는 과정에서 COVID-19로 인해 중국 유학생들이 학교 생활에서 고립감을 느끼는 문제가 있음을 알게 되었습니다. 모든 것이 생소한 타국 생활에  언어도 통하지 않는 여러 어려움을 겪고 있는 중국 유학생들의 고충은 함께 학교생활을 하는 입장에서 꼭 해결해 주고싶은 문제였습니다.<br />
<br />
CUK共 打(da) call은 중국 유학생들의 학교 적응을 원활히 돕기 위해 자체적으로 수정 가능한 ‘가톨릭대 가이드북’을 만들었습니다. 이 사이트의 이용자는 학교 내부의 건물의 이름과 위치 등을 한눈에 확인할 수 있으며, 학교 주변에 어떤 식당과 카페가 있는지, 수업에 필요한 물품 등은 어떻게 구매할 수 있는지 확인할 수 있습니다. 뿐만 아니라, 학교 수업에 대한 정보와 과제의 여부 등, 자체적인 수업 평가 기능을 통해 수업을 듣기 전 미리 자신이 들을 수업의 정보를 확인할 수 있습니다. 



<br>





## 페이지구성 및 구현사항

- mediaquery를 활용하여 화면크기에 따라 내용이 바뀌는 반응형 페이지 구현
- Navbar는 메인에서 보이지 않고, 상세페이지에서만 보이도록 구현
- Navbar와 footer 항목에 hover 하거나 이를 선택하면 색이 바뀌도록 구현
- 메인에서 상세페이지로 넘어갈 때 선택한 상세페이지에 해당하는 navbar 항목의 색이 바뀌도록 window를 활용하여 구현

<ol>
  <li>메인</li>
  
  - 클릭 시 상세페이지로 넘어가는 card를 component 재사용
  - Card에 hover하면 색이 바뀌도록 구현
  
  <br>
  
  
  <li>학교 내부</li>
  
  - 내부 UI구현 및 학교 내부 이미지 작성
  
  <br>
  
  <li>학교 외부</li>
  
  - 학교 외부 시설 소개를 component 재사용으로 식당, 카페, 주변 시설 소개 페이지 구현
  - 상점의 상호명, 정보, 이용시간을 map함수를 적용하여 component 재사용 구현
  - Tab 에 hover 하거나 클릭 시 색상이 바뀌도록 구현
  - 내용이 길어 짤리는 글자의 경우 마우스를 hover하면 모든 내용이 보이도록 구현
  
  <br>
  
  <li>학사 일정</li>
  
  - React-Big-Calendar 라이브러리를 활용하여 날짜별 학사일정 구현
  - 오늘 날짜에 맞춰 달력이 보여주도록 설정
  - 글자가 길어 짤리는 경우 마우스를 hover하면 모든 내용이 보이도록 
  
  <br>
  
  <li>강의평가</li>
  
  - 선택하는 과목에 따라 상세내용이 다르게 나올 수 있도록 상세내용 부분을 component화 하여 분리
  - 과목을 선택하면 state 값을 바꿔주며 그 state 값과 상세내용의 id 값이 일치하는 경우에만 출력되도록 구현
  - 과목의 정보가 많아질 것을 대비하여 데이터들을 utils 폴더의 data.js로 분리하고, import 하여 사용
  - 이용자가 강의평가에 대한 정보를 입력할 수 있도록 To do a survey 버튼을 만들고, 이를 구글form으로 연결시킴
  - 가장 최근에 추가되는 데이터의 버튼이 맨 위로 나오도록 구현
  - 버튼에 마우스를 hover 하거나 선택하면 색이 바뀌도록 구현
  
</ol>


<br>

## 메인
<img src="https://user-images.githubusercontent.com/68775082/121039910-74293900-c7ec-11eb-9ae5-c196c8d900dc.PNG" width="500">


<br>

## 학교 내부

<img src="https://user-images.githubusercontent.com/68775082/121039920-768b9300-c7ec-11eb-9463-c8608ba40919.PNG" width="500">

<br>

## 학교 외부 

<img src="https://user-images.githubusercontent.com/68775082/121039974-80ad9180-c7ec-11eb-97c1-7aa330cf6a9d.PNG" width="500">


<br>

## 학사 일정
 

<img src="https://user-images.githubusercontent.com/68775082/121039996-873c0900-c7ec-11eb-8653-f848e228b84d.PNG" width="500">


<br>

## 강의평가 

<img src="https://user-images.githubusercontent.com/68775082/121040021-8b682680-c7ec-11eb-94de-bbf84d78c5fd.PNG" width="500">


