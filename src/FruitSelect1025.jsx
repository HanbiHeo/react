import { useState } from 'react';

const FruitSelect = () => {
  const [value, setValue] = useState('grape');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert('선택한 과일 : ' + value);

    //기본 이벤트를 막는 코드
    e.preventDefault();
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        {' '}
        과일을 선택 하세요.
        {/* onChange가 있어야 select의 option들을 선택해도 변경값이 적용이 된다. */}
        <select value={value} onChange={handleChange}>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="grape">grape</option>
          <option value="kiwi">kiwi</option>
          <option value="mango">mango</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
};

export default FruitSelect;
