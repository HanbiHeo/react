import './App.css';
// import EventHandler from './EventHandler1025';
// import RadioButton from './RadioButton1025';
// import Table from './Table1025';
// import TableMap from './Tablemap1025';
import CreateRef from './UseRef1025';
// import Clock from './Clock1025';
// import Say from './Say1024';
// import WelcomeProp from "./WelcomePromps";
// import Section from "./Section1024"
// import MyComponent from './myComponent1024';
// import EventPractice from './onChange1025';

// const member =/{
//   name : "곰돌이",
//   age : 22,
//   job : "개발자",
//   addr : "경기도 수원시",
//   gender : "none",
// };

// const getGeeting = (user) => {
//   return (user) ? (<h1>환영합니다. {member.name}님.</h1>) : (<h1>환영합니다. 방문자님.</h1>);
// }

function App() {
  // const element = <WelcomeProp name = "곰돌이"/>
  //스타일 이름은 전부 카멜 표기법으로 변경 됨
  // const test = /{
  //   backgroundColor: "#ccc",
  //   color: "royalBlue",
  //   fontSize: "2em",
  // /}

  return (
    // 하나의 컨퍼런트는 하나의 태그로 묶여져야함/(감싸주는 태그 있어야함). 마지막에 묶어주어야 한다. |빈 태그<></>| or |플래그먼트 태그 ex/) <div></div>|
    // <>

    // <h1 style=/{{color: "red"}}> 안녕하세요. 저는 {member.name} 입니다. 나이는 {member.age}이며, 주소는 {member.addr}입니다.</h1>
    // {/* 조건부 렌더링 : 3항 연산자 사용하는 방법 */}
    // {member.name === "리액트" ? <h1>리엑트이면 h1태그</h1> : <h2>아니면 h2태그</h2>}
    // {/* 조건부 렌더링 : AND 연산자 사용 /(자주 사용함 ex) 데이터 들어오면 렌더링. 아니면 넘어감. */}
    // {member.name === "곰돌이" && <h1 style={test}>곰돌이님이 로그인 하셨습니다.</h1>}
    // {/* 멤버 데이터가 있으면 넘어가는 코드 */}
    // {member && <h1>  .  </h1>}
    // <div className="App">
    //   <p className="title-name">안녕하세요 저는 {member.name}입니다.</p>
    //   <p className="title-name">직업은 {member.job},</p>
    //   <p className="title-name">주소는 {member.addr},</p>
    //   <p className="title-name">성별은 {member.gender} 입니다.</p>
    // </div>
    // <div>{getGeeting(true)}</div>
    // </>

    // <>
    //  <WelcomeProp name="곰돌이" addr="경기도" age = {22}/>
    //  <WelcomeProp name="이영지" addr="서울시" age = {23}/>
    // </>

    <>
      {/* <Section title="스포츠" content="This is the content for section1."/>
    <Section title="정치" content="This is the concent for section2."/> */}
      {/* <MyComponent name="곰돌이 사육사" age={30}>
        태그와 태그 사이 들어가는 프롭스 내용을 보여주는 props.children
      </MyComponent> */}
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      {/* <TableMap /> */}
      <CreateRef />
    </>
  );
}

export default CreateRef;
