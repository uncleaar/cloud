import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

import 'antd/dist/reset.css';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
