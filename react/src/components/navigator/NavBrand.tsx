import { CloudCircle } from '@material-ui/icons';
import React from 'react';

export default function NavBrand() {
  return (
    <div className="nav-brand">
      <CloudCircle className="icon" />
      <div className="title">
        {'FERN'}
        <div className="subtitle">A Template</div>
      </div>
    </div>
  );
}
