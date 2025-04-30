import React from 'react';
import LgnContextProvider from '../context/LgnContextProvider';
import MainComponent from './MainComponent';

const TestUseContext = () => {
  return (
    <LgnContextProvider>
      <MainComponent />
    </LgnContextProvider>
  );
};

export default TestUseContext;
