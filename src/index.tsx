import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/assets/theme';
import 'normalize.css';
import '@/assets/css/index.less';
import App from '@/App';
import store from '@/store';
// import { Watermark } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        {/* <Watermark content="王康梅"> */}
          <App />
        {/* </Watermark> */}
      </HashRouter>
    </ThemeProvider>
  </Provider>,
);
