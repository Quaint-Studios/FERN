import React, { useEffect } from 'react';

import { IRoute } from '@components/routes/Routes';
import { useNavValue, ActionType as navAction } from './data/Nav';

import RoleComponent from './RoleComponent';
import SEOHandler from './SEOHandler';

/**
 * Manages the navigator context and applies required wrappers to child components.
 */
export default function ContextHandler({ route, children }: IContextHandler) {
  const [nav, navDispatch] = useNavValue();

  useEffect(() => {
    updateAll();
  });

  function updateAll() {
    updateNavigator(); // Updates the nav path and hidden status.
  }

  /**
   * Updates the navigator's path and visibility to match the current route.
   */
  function updateNavigator() {
    if (route.path !== nav.path) {
      navDispatch({
        type: navAction.PATH,
        payload: route.path
      });
    }

    if (route.hideNav !== nav.hidden) {
      navDispatch({
        type: navAction.TOGGLE
      });
    }

    updateNavItems();
  }

  /**
   * Sets matching nav items to active.
   */
  function updateNavItems() {
    const navItems = document.getElementsByClassName('nav-item');

    Array.from(navItems).forEach((elem) => {
      let href = elem.getAttribute('href');

      if (href === null || href === '#') {
        elem.classList.remove('active');
        return;
      }

      if (elem.getAttribute('href') === nav.path) {
        elem.classList.add('active');
      } else {
        elem.classList.remove('active');
      }
    });
  }

  // Render
  if (route.roles !== null) {
    return (
      <SEOHandler route={route}>
        <RoleComponent route={route}>{children}</RoleComponent>
      </SEOHandler>
    );
  }

  return <SEOHandler route={route}>children</SEOHandler>;
}

interface IContextHandler {
  route: IRoute;
  children: any;
}
