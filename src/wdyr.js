import React from 'react';

const whyDidYouRender = require('@welldone-software/why-did-you-render');

whyDidYouRender(React, {
  trackAllPureComponents: true,
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'darkturquoise'
});
