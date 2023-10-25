//onChange 이벤트 헨들링
import { useState } from 'react';

const EventPractice = () => {
  //콜백함수. onChange가 바뀌면 e(이벤트를 감지)로 불러달라는 콜백함수.
  const [message, setMessage] = useState('안녕하세요');
  //input창에 들어오는 값이 onchange로 발생 -> 이벤트 덩어리가 만들어진걸, target을 찾아 setMessage에 넣고 넣는 순간 렌더링이 일어나고 화면의 글자도 바뀐다.
  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="이름을 입력 하세요"
        onChange={changeMsg}
      />
      <h2>입력 받은 메시지 : {message}</h2>
    </>
  );
};

export default EventPractice;
