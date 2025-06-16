import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Theme className="container" preset={presetGpnDefault}>
      <RouterProvider router={router} />
    </Theme>
  </Provider>
);

