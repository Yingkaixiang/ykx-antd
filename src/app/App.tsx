import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

ReactDOM.render(
  <Hello compiler="Typescript" framework="Reacta" bundler="Webpackssss" />,
  document.getElementById('root')
);

declare let module: any
if (module.hot) {
  module.hot.accept();
}