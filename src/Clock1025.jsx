// useState()를 사용하여 시간 업데이트 하기 -> 구조분해'{}'의 성격을 가짐. 하나의 파일 내에서 특정한것만 가져 나올 때 {}를 써서 가져옴.
import { useState, useEffect } from 'react';

//컴포넌트 : 화면의 동작과 화면을 그려주는 요소가 모두 포함, 반환은 구성된 화면이 반환 됨
const Clock = () => {
  //Date는 실제 화면에 나타나는 값 setDate는 값을 변경시켜주는 함수이고 값이 변경되면 자동 렌더링이 일어남
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //화살표 함수로 만들어진 익명의 함수 (화살표 함수는 전부 익명의 함수. '() => ~'부터 전부 함수)
    const tick = () => {
      setDate(new Date());
    };
    const intervalID = setInterval(tick, 1000);
    //componentWillUnmount가 아닌 return문으로 언마운트.
    //컴포넌트가 언마운트 되는 시점=화면이 없어질 때=접붙여졌다 떨어질 때, return문을 만나고 clear를 해줌
    return () => {
      clearInterval(intervalID);
    };
    // [] ; 의존성 빈 배열, 화면이 최초로 그려질 때 한번만 userEffect 그려짐. 배열이 비어있으면 화면이 마운트되는 시점(렌더링이 된 후 불리어짐)을 의미
  }, []);

  // 1000(1초)마다 일정한 행동을 반복하는 함수. 화면에 현재시간을 출력하는 코드. setInterval은 콜백함수라 1초마다 렌더링이 되고있음. 오래띄워놓으면 안됨... 계속 렌더링이 무한으로 생성되기 때문에. 업데이트(렌더링)이 일어날 때 마다 성능이 저하된다.
  //   setInterval(tick, 1000);

  return (
    <>
      <h1>현재 시간을 표시 합니다.</h1>
      <h2>
        오늘은 '{date.toLocaleDateString()}' 시간은 '{date.toLocaleTimeString()}
        '
      </h2>
    </>
  );
};
export default Clock;
