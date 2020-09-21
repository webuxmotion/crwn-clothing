import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreivew from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...rest }) => <CollectionPreivew key={id} {...rest} />)
        }
      </div>
    )
  }
}

export default ShopPage;
