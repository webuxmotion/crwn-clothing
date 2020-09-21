import React, { Component } from 'react';
import { sections } from './data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...rest }) => (
            <MenuItem key={id} {...rest} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
