import React from 'react';

import { useNavValue } from './data/Nav';
import { useThemeValue } from './data/Theme';

import Navigator from '../navigator/Navigator';

/**
 * The AppLoader handles preloaded elements
 * that don't belong in the Switch.
 */
export default function AppLoader() {
  const [nav] = useNavValue();
  const [theme] = useThemeValue();

  document.body.id = theme;

  if (!nav.hidden) {
    return <Navigator />;
  }
  return <></>;
}
