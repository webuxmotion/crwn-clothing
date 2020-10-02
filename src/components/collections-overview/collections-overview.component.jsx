import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreivew from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  console.log('collections', collections);

  return (
    <div className="collections-overview">
      {
        collections.map(({ id, ...rest }) => <CollectionPreivew key={id} {...rest} />)
      }
    </div>
  )
};

export default connect(
  createStructuredSelector({
    collections: selectCollectionsForPreview
  })
)(CollectionOverview);
