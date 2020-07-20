import React from 'react';

import './Navigator.scss';

/* import { ActionType as navAction, useNavValue } from '../contexts/data/Nav'; */

import { Button } from '@material-ui/core';
import { AccountCircle, Code, Home, Palette } from '@material-ui/icons';
/* import { useUserValue } from '../contexts/data/User'; */
import NavBrand from './NavBrand';
import NavItem from './NavItem';

/**
 * TODO: Add Topbar / Sidebar components with Items to go with each.
 */
export default function Navigator() {
  /* const [user, setUser] = useUserValue();
  const [nav, setNav] = useNavValue();
  const account = user.user; */

  return (
    <div id="navigator">
      <div id="topbar">
        <NavBrand />
        <div className="nav-item-collection">
          <NavItem className="active" title="Home" icon={Home} href="/" />
          <NavItem title="Art" icon={Palette} href="/art" />
          <NavItem title="Code" icon={Code} href="/code" />
          <div className="account">
            <Button variant="contained">
              <AccountCircle />
              <div className="title">Login</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
