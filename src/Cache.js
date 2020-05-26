import React, { useState } from 'react';
import './App.css';

export const Cache = () => {

  const [keyText, setKeyText] = useState('');
  const [valueText, setValueText] = useState('');
  const [result, setResult] = useState([]);

  const changeInput = (event, callback) => {
    const target = event.target.value;

    callback(target)
  }

  const addNewValue = () => {
    const newResult = [...result];
    const newCacheItem = {};
    const index = result.findIndex(item => Object.keys(item)[0] === keyText)

    if(index === -1) {
      newCacheItem[keyText] = valueText;

      newResult.unshift(newCacheItem);

      if (newResult.length > 2) {
        newResult.length = 2;
      }

      setResult(newResult);
      setKeyText('');
      setValueText('');
      return;
    }

    const elem = newResult.splice(index, 1)[0];
    elem[keyText] = valueText;

    newResult.unshift(elem);

    if (newResult.length > 2) {
      newResult.length = 2;
    }
    
    setResult(newResult);
    setKeyText('');
    setValueText('');
  }

  const getCurrentValue = () => {
    if (keyText) {
      const newResult = [...result];
      const index = result.findIndex(item => Object.keys(item)[0] === keyText);
      const elem = newResult.splice(index, 1);

      newResult.unshift(elem[0]);
      newResult.length = 2;

      setResult(newResult);
      setKeyText('');
      setValueText('');
    }

    if (valueText) {
      const newResult = [...result];
      const index = result.findIndex(item => Object.values(item)[0] === valueText);
      const elem = newResult.splice(index, 1);

      newResult.unshift(elem[0]);
      newResult.length = 2;

      setResult(newResult);
      setKeyText('');
      setValueText('');
    }
  }

  return (
    <div className="cache">
      <input
        placeholder="Enter your key"
        type="text"
        value={keyText}
        onChange={(e) => changeInput(e, setKeyText)}
      />

      <input
        placeholder="Enter your value"
        type="text"
        value={valueText}
        onChange={(e) => changeInput(e, setValueText)}
      />
      <button
        onClick={addNewValue}
        disabled={!keyText || !valueText}
      >
        set
      </button>
      <button
        onClick={getCurrentValue}
        disabled={!keyText && !valueText}
      >
        get
      </button>

      {
        !!result.length
        && (
          <table>
            <thead>
              <tr>
                <th>
                  key
                </th>
                <th>
                  value
                </th>
              </tr>
            </thead>
            <tbody>
              {
                result.map(item => (
                  <tr key={Object.keys(item)[0]}>
                    <td>
                      {Object.keys(item)[0]}
                    </td>
                    <td>
                      {Object.values(item)[0]}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}