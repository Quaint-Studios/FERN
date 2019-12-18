import React from 'react';

/**
 * Configuration
 */
const sidebar = null;

const topbar = <React.Fragment>{'Welcome!'}</React.Fragment>;

/**
 * TODO: Add Topbar / Sidebar components with Items to go with each.
 */
export default function Navigator() {
  const components = [];

  if (sidebar !== null) {
    components.push(<div className="sidebar">{sidebar}</div>);
  }

  if (topbar !== null) {
    components.push(<div className="topbar">{topbar}</div>);
  }

  return <div className="navigator">{components}</div>;
}
