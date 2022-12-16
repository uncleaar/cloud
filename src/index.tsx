import { createRoot } from 'react-dom/client';
import { App } from './app';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

import 'antd/dist/reset.css';

root.render(<App />);
