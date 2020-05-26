import React from 'react';
import { DatePicker } from 'antd';
import { Cache } from './Cache';
import 'antd/dist/antd.css'

const App = () => {

  return (
    <div>
      <DatePicker open={true} />
      <Cache />
    </div>
  );
}

export default App;
