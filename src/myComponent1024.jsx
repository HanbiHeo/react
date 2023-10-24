// props 기본값 설정 : defaultsProps
const MyComponent = props => {
    return <div>안녕하세요 {props.name}입니다. 나이는 {props.age} 입니다.</div>
}

MyComponent.defultProps = {
    name : "기본이름",
    age : 20,
}
export default MyComponent;