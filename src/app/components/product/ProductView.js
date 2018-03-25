import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';

class ProductView extends PureComponent {
  static propTypes = {
    productList:    PropTypes.array.isRequired,
  }

  render() {
    const {productList} = this.props;
    return(
      <div className="product">
        {
          productList.map((item, index) => (
            <div key={index} className="product-thumb h4">
              <div className="product-thumb-name">
                {item.name}
              </div>
              <div className="product-thumb-price">
                ${item.price}
              </div>              
            </div>
          ))
        }
      </div>
    );
  }
}

export default ProductView;
