import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './components/button/';

ReactDOM.render(
  <div>
    <Button
      style={{ margin: 8 }}
      type="primary"
      onClick={() => {console.log(123)}}
    >primary</Button>
    <Button
      style={{ margin: 8 }}
      onClick={() => {console.log(123)}}
    >default</Button>
    <Button
      style={{ margin: 8 }}
      disabled
      onClick={() => {console.log(123)}}
    >disabled</Button>
  </div>,
  document.getElementById('root')
);

declare let module: any
if (module.hot) {
  module.hot.accept();
}