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
    console.log(productList);
    return(
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
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
      </div>
    );
  }
}

export default ProductView;
