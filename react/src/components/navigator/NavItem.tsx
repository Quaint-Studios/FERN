import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({
  title,
  href,
  icon: Icon,
  className
}: INavItem) {
  const [active, setActive] = useState('');

  return (
    <Link to={href || '#'} className={'nav-item ' + (active || '')}>
      {Icon !== undefined ? <Icon className="icon" /> : ''}
      <div className="title">{title}</div>
    </Link>
  );
}

interface INavItem {
  title: string;
  href?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  className?: string;
}
