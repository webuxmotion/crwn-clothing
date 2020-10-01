import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {

  render() {
    const { sections } = this.props;

    return (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...rest }) => (
            <MenuItem key={id} {...rest} />
          ))
        }
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({
    sections: selectDirectorySections
  })
)(Directory);
