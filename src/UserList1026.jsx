// const User = (props) => {
//   return (
//     <div>
//       <b>{props.user.userName}</b> <span>{props.user.email}</span>
//     </div>
//   );
// };
import './App.css';

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: '천지훈',
      email: '1000won@gmail.com',
    },
    {
      id: 200,
      userName: '백마리',
      email: '2000won@gmail.com',
    },
    {
      id: 300,
      userName: '서민혁',
      email: '3000won@gmail.com',
    },
  ];

  const seasons = ['새로운 봄', '활기찬 여름', '풍성한 가을', '새하얀 겨울'];
  const newSeasons = seasons.map((e, index) => <li key={index}>{e}</li>);

  //   const newUsers = users.map((user) => (
  //     <div key={user.email}>
  //       <b>{user.userName}</b> <span>{user.email}</span>
  //     </div>
  //   ));

  return (
    <>
      {/* <div>
        <b>{users[0].userName}</b>
        <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].userName}</b>
        <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].userName}</b>
        <span>{users[2].email}</span>
      </div> */}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      <h2>천원짜리 변호사 직원 리스트</h2>
      {users &&
        users.map((user) => (
          <div key={user.email}>
            <b>{user.userName}</b> <span>{user.email}</span>
          </div>
        ))}
      <h2 id="season">사계절</h2>
      <ul>{newSeasons}</ul>
    </>
  );
};

//컴포넌트 같은 페이지에 여러개 만들어도 되지만, export는 하나만 가능하다.
export default UserList;
