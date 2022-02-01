import React from 'react';
import GoToTop from '../gototop';
import { data } from '../../constants';

import CollectionPreview from '../../components/collectionPreview/collectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        <GoToTop />
      </div>
    );
  }
}

export default ShopPage;
