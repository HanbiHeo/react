import React, { useState } from 'react';

const Say = () => {
  // const [message(getter), setMessage(setter)] 1)userstate 배열 만들기 2)세터게터. => setmessage일어나면 렌더링 시작. (html과는 다른점)
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!!');
  const onClickLeave = () => setMessage('잘가세요!!');
  const [val, setColor] = useState('black');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: val }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파랑색
      </button>
    </>
  );
};

export default Say;
