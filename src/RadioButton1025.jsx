import { useState } from 'react';

function RadioButton() {
  const [selectVal, setSelectVal] = useState('apple');
  function handleChange(e) {
    setSelectVal(e.target.value);
  }

  return (
    <>
      {/* 상호작용 요소 htmlFor */}
      <label htmlFor="apple">
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />{' '}
        사과
      </label>
      <br />
      <label htmlFor="orange">
        <input
          type="radio"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handleChange}
        />
        오렌지
      </label>
      <br />
      <label htmlFor="strawberry">
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>Selected value: {selectVal}</p>
    </>
  );
}

export default RadioButton;
