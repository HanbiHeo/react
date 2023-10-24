// props 기본값 설정 : defaultsProps
const MyComponent = ({ name, age, children }) => {
  //비구조화할당(구조분해) : props객체의 속성과 값을 변수에 대입함.
  //   const {name, age, children} = props;

  return (
    <div>
      안녕하세요 {name}입니다. 나이는 {age} 입니다. wow
      {children}
    </div>
  );
};

MyComponent.defultProps = {
  name: '기본이름',
  age: 20,
};
export default MyComponent;
