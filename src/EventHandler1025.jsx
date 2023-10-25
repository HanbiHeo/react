import { useState } from 'react';

const EventHandler = () => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  //화면 입력 후 엔터나 클릭(버튼)을 누르면 화면이 지워지는 부분
  const onClick = () => {
    alert(userName + ' : ' + message);
    //초기화하기 위해(출력창을 비워주기 위해)
    setUserName('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    //Enter키를 누르면 온클릭을 바꾸다.
    if (e.key === 'Enter') onClick();
  };

  return (
    <>
      <h1>이벤트연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        placeholder="매일두유"
        value={message}
        onChange={onChangeMessage}
        //첫번째 입력창에서는 에터를 눌렀을때 alert창으로 바로넘어가면 안되고, 두번째 입력창까지 채운 후에만 onKeyDown 효과를 주어서 넘어갈 수 있게 해야한다.
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventHandler;
