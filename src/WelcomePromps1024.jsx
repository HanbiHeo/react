const WelcomeProp = (props) => {
  return (
    <>
      <h1>안녕하세요. 저는{props.name}입니다.</h1>
      <h3>저의 주소는 {props.addr}이며,</h3>
      <h3>저의 나이는 {props.age}입니다.</h3>
    </>
  );
};
export default WelcomeProp;
