import { useState, useEffect } from 'react';
const TableMap = () => {
  const data = [
    { id: 100, name: '지민', age: 29 },
    { id: 200, name: '뷔', age: 28 },
    { id: 300, name: 'RM', age: 30 },
    { id: 400, name: '정국', age: 27 },
  ];
  const [mapData, setMapData] = useState('');

  useEffect(() => {
    setMapData(data);
    //빈배열[]은 의존성 배열, 비워놓으면 마운트 되는 시점.
    //userEffect는 렌더링 된 후 다음시점에 그려지는 부분을 호출.
  }, []);

  const tableClickEvent = (item) => {
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
        {/* && 조건부 렌더링. mapData가 있으면 실행. mapData && 없으면 코드가 죽어버림.*/}
        {mapData &&
          mapData.map((item) => (
            <tr key={item.id} onClick={() => tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default TableMap;
