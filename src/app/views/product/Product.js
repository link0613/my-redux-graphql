// @flow weak

import React, {
  PureComponent,
}                     from 'react';
import PropTypes      from 'prop-types';
import Jumbotron      from '../../components/jumbotron/Jumbotron';
import ProductView    from '../../components/product/ProductView';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import gql          from 'graphql-tag';
import { graphql }  from 'react-apollo';
import { compose }  from 'react-apollo'


const ALL_PRODUCTS = gql`
  query GetAllProducts($first: Int, $after: String, $orderBy: [ProductsOrderByArgs]) {
    viewer {
        allProducts(first: $first, after: $after, orderBy: $orderBy) {
          edges {
            cursor
            node {
              id
              categories
              quantity
              price
              thumbnails
              preview
              sku
              name
            }
          }
        }
      }
    }
`;
const ALL_CATEGORIES = gql`
  query GetAllCategories($first: Int, $after: String, $orderBy: [CategoriesOrderByArgs]) {
    viewer {
        allCategories(first: $first, after: $after, orderBy: $orderBy) {
          edges {
            cursor
            node {
              id
              name
              description
              parentID
              isActive
              sort
              createdAt
              modifiedAt
            }
          }
        }
      }
    }
`;
const querySet = compose (
  graphql(ALL_PRODUCTS, {name: "allProducts"}),
  graphql(ALL_CATEGORIES, {name: "allCategories"}),
);

class Product extends PureComponent {
  static propTypes= {
    allProducts:   PropTypes.object.isRequired,
    allCategories:   PropTypes.object.isRequired,
    enterProduct:    PropTypes.func.isRequired,
    leaveProduct:    PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
  };

  state = {
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterProduct } = this.props;
    enterProduct();
  }

  componentWillUnmount() {
    const { leaveProduct } = this.props;
    leaveProduct();
  }

  render() {
    const {
      viewEntersAnim
    } = this.state;

    if (this.props.allProducts && this.props.allProducts.loading) {
      return <div>Loading ...</div>;
    }

    if (this.props.allProducts && this.props.allProducts.error) {
      console.error(this.props.allProducts.error);
      return <div>Error occurred</div>;
    }
    const allProducts = this.props.allProducts.viewer.allProducts.edges;
    
    const {selectedCategory} = this.props;
    
    //get id of product
    const allCategories = this.props.allCategories.viewer.allCategories.edges;
    let selectedCategoryID = null;
    allCategories.forEach(function(element) {
      if (element.node.name === selectedCategory) {
        selectedCategoryID = element.node.id;
      }
    })
    let productList = [];
    allProducts.forEach(function(element) {
      if (element.node.categories.includes(selectedCategoryID)){
        productList.push(element.node)
      }
    });
 
    return(
      <div
        key="productView"
        className={ cx({ 'view-enter': viewEntersAnim }) }>
        <Jumbotron>
          <h1> {selectedCategory} </h1>
          <ProductView productList={productList}/>
        </Jumbotron>
      </div>
    );
  }
}

export default querySet(Product)