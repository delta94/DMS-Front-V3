import React from 'react';
import { Link } from 'react-router-dom';

import './ApplyMenuItem.scss';

const ApplyMenuItem = ({ url, content, isSelected, onSelectMenu }) => {
  return (
    <div
      className={`unselectable apply--menu--item ${isSelected}`}
      onClick={() => onSelectMenu(content)}
    >
      <Link className='unselectable' to={`/${url}`}>
        {content}
      </Link>
    </div>
  );
};

export default ApplyMenuItem;
