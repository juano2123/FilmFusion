import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RouterDom from '../src/web-app/Routes/RouterDom.js';
import { Provider } from 'react-redux';
import { store } from './web-app/redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <RouterDom />
      </DndProvider>
    </BrowserRouter>
  </React.StrictMode>
);
