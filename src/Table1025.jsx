import React from 'react';

const Table = () => {
  const date = [
    { id: 1, name: '장원영', age: 20 },
    { id: 2, name: '이서', age: 18 },
    { id: 3, name: '가을', age: 22 },
    { id: 4, name: '가을', age: 22 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {date.map((item) => (
          //   <tr key={item.id} onClick={~||||부분은F12에서 클릭시 관련 정보가 보임~ ||() => || handleTableRowClick(item)}>
          //map에서는 유일한 식별자 (id)가 필요함 -> id가 없으면 전체 검색을 하기 때문에 성능이 떨어짐.
          //key값은 유일한 식별자로 구분. 이 역시 성능저하를 방지하기 위해서임.
          //정보를 가지고 페이지 이동, 서버 정보 검색 등에 쓸 수 있다.

          // <tr key={item.id} onClick={() => handleTableRowClick(item)}>
          <tr key={item.id} onClick={() => console.log(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
