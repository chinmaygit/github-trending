import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  .main {
    flex: 1 0 auto;
  }
  .content {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .footer {
    flex-shrink: 0;
    background-color: #F3F3F3;
    padding: 16px;
  }

  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #app {
    background-color: #FFFFFF;
    min-height: 100%;
    min-width: 100%;
  }
`;
