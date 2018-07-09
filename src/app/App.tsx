import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './components/button/';
import Radio from './components/radio/';
import Input from './components/input/';

ReactDOM.render(
  <div>
    <Button
      style={{ margin: 8 }}
      type="primary"
      onClick={() => {
        console.log(123);
      }}
    >
      Primary
    </Button>
    <Button
      style={{ margin: 8 }}
      type="primary"
      ghost
      onClick={() => {
        console.log(123);
      }}
    >
      Primary
    </Button>
    <Button
      style={{ margin: 8 }}
      onClick={() => {
        console.log(123);
      }}
    >
      Default
    </Button>
    <Button
      style={{ margin: 8 }}
      disabled
      onClick={() => {
        console.log(123);
      }}
    >
      Disabled
    </Button>
    <Radio>Radio</Radio>
    <Input />
  </div>,
  document.getElementById('root'),
);

declare let module: any;
if (module.hot) {
  module.hot.accept();
}
