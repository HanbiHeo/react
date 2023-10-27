//useEffect : 생명주기(class컴포넌트) 메소드를 대체하는 React Hook중 하나.
//컴포넌트가 렌더링될 때마다 특정 동작을 수행.
//useEffect는 컴포넌트가 렌더링된 이후에 수행되며, 기본적으로는 매 랜더링 마다 수행된다.
//의존성 배열에 전달된 상태가 변경될 때마다 수해오디게 함.
import { useState, useEffect } from 'react';

const MemberInfo = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  //렌더링이 되고난 후 불리어짐. 빈 배열[]을 넣음 : 의존성 배열이라고 하며, 아무 값을 넣지 안으면 mount마운트 시에만 호출이 된다. 변경된 값을 감지하고 싶을때 쓴다.
  useEffect(() => {
    console.log('렌더완료');
    console.log(name, nickName);
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <>
      <input type="text" value={name} onChange={{ onChangeName }} />
      <input type="text" value={nickName} onChange={{ onChangeNickName }} />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </>
  );
};
export default MemberInfo;
