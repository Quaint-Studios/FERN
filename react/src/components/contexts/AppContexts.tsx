import React from 'react';

import { Nav } from './data/Nav';
import { Theme } from './data/Theme';
import AppLoader from './AppLoader';

/**
 * The job of the AppContexts is to make sure
 * that every component for the application
 * has access to read and write to global
 * variables whenever they want.
 */
export default function AppContexts({ children }: IAppContexts) {
  return (
    <Theme>
      <Nav>
        <AppLoader />
        {children}
      </Nav>
    </Theme>
  );
}

interface IAppContexts {
  children: any;
}
