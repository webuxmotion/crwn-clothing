import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreivew from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) =>  (
  <div className="shop-page">
    {
      collections.map(({ id, ...rest }) => <CollectionPreivew key={id} {...rest} />)
    }
  </div>
);

export default connect(
  createStructuredSelector({
    collections: selectShopCollections
  })
)(ShopPage);
