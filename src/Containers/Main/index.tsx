import { PageWrapper } from 'Components/Common/PageWrapper';
import { Content } from 'Components/Main/Content';
import { log } from 'console';
import React, { useEffect } from 'react';

export const Main = () => {
  console.log('Main');

  useEffect(() => {
    console.log('Main MOUNT');

    return () => console.log('Main UNMOUNT');
  }, []);

  return (
    <PageWrapper>
      <Content />
    </PageWrapper>
  );
};
