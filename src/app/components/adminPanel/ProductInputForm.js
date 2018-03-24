// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import gql          from 'graphql-tag';
import { graphql }  from 'react-apollo';
import { compose }  from 'react-apollo'
import 'react-select/dist/react-select.css';

const ALL_CATEGORIES = gql`
  query GetAllCategories($first: Int, $after: String, $orderBy: [CategoriesOrderByArgs]) {
    viewer {
        allCategories(first: $first, after: $after, orderBy: $orderBy) {
          edges {
            cursor
            node {
              id
              name
            }
          }
        }
      }
    }
`;


class ProductInputForm extends PureComponent {
  static propTypes = {
    selected: PropTypes.string.isRequired,
  }

 
  constructor(props) {
    super(props);
    this.state = { value: [] };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.selected });
  }
   
	handleSelectChange = (value) => {
    this.setState({ value: value });
  }

  render() {

    if (this.props.allCategories && this.props.allCategories.loading) {
      return <div>Loading ...</div>;
    }
    
    const {value} = this.state;
    const options = this.props.allCategories.viewer.allCategories.edges.map(obj =>{ 
      var rObj = {};
      rObj['value'] = obj.node.id;
      rObj['label'] = obj.node.name;
      return rObj;
    })

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
            options={options}
            placeholder="Select categories"
            simpleValue
            value={value}
				  />
          <input type="hidden" className="form-control" id="productCategories" placeholder="Selected Categories" value={value} />
        </div> 
      </div>
    );
  }
}
 
export default graphql(ALL_CATEGORIES, {name: "allCategories"}) (ProductInputForm)

