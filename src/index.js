// import React from 'react';
// import ReactDom from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// import getRouter from './routers/router';

// /*初始化*/
// renderWithHotReload(getRouter());

// /*热更新*/
// if (module.hot) {
//   module.hot.accept('./router/router', () => {
//     const getRouter = require('./routers/router').default;
//     renderWithHotReload(getRouter());
//   });
// }

// function renderWithHotReload(RootElement) {
//   ReactDom.render(
//     <AppContainer>
//       <Provider store={store}>
//         {RootElement}
//       </Provider>
//     </AppContainer>,


//     document.getElementById('app')
//   )
// }

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';

ReactDom.render(
    <Hello/>, document.getElementById('app'));