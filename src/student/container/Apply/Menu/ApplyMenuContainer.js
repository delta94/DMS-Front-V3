import React, { Component } from 'react';
import './ApplyMenuContainer.scss';

import ApplyTitle from '../../../component/Utils/ApplyTitle';
import ApplyMenu from '../../../component/Utils/ApplyMenu';

export default class ApplyMenuContainer extends Component {
  render() {
    const { menuType, selectedMenu } = this.props;
    return (
      <div className='apply--menu'>
        <ApplyTitle />
        <ApplyMenu menuType={menuType} selectedMenu={selectedMenu} />
      </div>
    );
  }
}