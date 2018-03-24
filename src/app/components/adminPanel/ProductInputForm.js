// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes  from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

class ProductInputForm extends PureComponent {
  //<input type="text" className="form-control" id="productCategories" placeholder="Categories"/>
  state = {
    value: [],
  }
 
	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}
  render() {

    const {value} = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="productSKU"> SKU </label>
          <input type="text" className="form-control" id="productSKU" placeholder="SKU"/>
        </div> 
        <div className="form-group">
          <label htmlFor="productName"> Name </label>
          <input type="text" className="form-control" id="productName" placeholder="Name"/>
        </div> 
        <div className="form-group">
          <label htmlFor="productPrice"> Price </label>
          <input type="text" className="form-control" id="productPrice" placeholder="Price"/>
        </div> 
        <div className="form-group">
          <label htmlFor="productQuantity"> Quantity </label>
          <input type="text" className="form-control" id="productQuantity" placeholder="Quantity"/>
        </div> 
        <div className="form-group">
          <label htmlFor="productCategories"> Categories </label>
          <Select
            multi
            onChange={this.handleSelectChange}
            options={FLAVOURS}
            placeholder="Select your favourite(s)"
            simpleValue
            value={value}
				  />        
        </div> 
      </div>
    );
  }
}
 
export default ProductInputForm;


