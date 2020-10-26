import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@components/firebase/firebase.main';

import AppLoader from './AppLoader';
import ContextHandler from './ContextHandler';

import { Nav } from './data/Nav';
import { Theme } from './data/Theme';
import { User } from './data/User';

import { IRoute } from '@components/routes/Routes';

/**
 * The job of the AppContexts is to make sure
 * that every component for the application
 * has access to read and write to global
 * variables whenever they want.
 */
export default function AppContexts({ children }: IAppContexts) {
  return (
    <BrowserRouter>
      <User>
        <Theme>
          <Nav>
            <AppLoader>{children}</AppLoader>
          </Nav>
        </Theme>
      </User>
    </BrowserRouter>
  );
}

interface IAppContexts {
  children: any;
}

export const withRoute = (ChildComponent: any, route: IRoute) => (
  props: JSX.IntrinsicAttributes
) => (
  <ContextHandler route={route}>
    <ChildComponent {...props} />
  </ContextHandler>
);
