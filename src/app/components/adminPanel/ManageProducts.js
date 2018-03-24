// @flow weak

import React, {
  PureComponent
}                   from 'react';
import PropTypes    from 'prop-types';
import gql          from 'graphql-tag';
import { graphql }  from 'react-apollo';
import { compose }  from 'react-apollo'
import ProductInputForm from './ProductInputForm'



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

const CREATE_PRODUCT = gql`
  mutation createProduct($product: CreateProductsInput!) {
    createProducts(input: $product) {
      changedProducts{
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
`
const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($product: UpdateProductsInput!) {
    updateProducts(input: $product) {
      changedProducts {
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
`

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($product: DeleteProductsInput!) {
    deleteProducts(input: $product) {
      changedProducts {
        id
      }
    }
  }
`

const querySet = compose (
  graphql(ALL_PRODUCTS, {name: "allProducts"}),
  graphql(CREATE_PRODUCT, {name: "createProduct"}),
  graphql(UPDATE_PRODUCT, {name: "updateProduct"}),
  graphql(DELETE_PRODUCT, {name: "deleteProduct"}),
)


class ManageProducts extends PureComponent {

  state = {
    selectedProductIndex: null,
  };

  sortAllProducts=async () => {
    await this.props.allProducts({
      variables: {
        "orderBy": 
        {
          "field": "sort" ,
          "direction": "DESC"
        }
      }
    });
  }

  getDefaultPros() {
    this.sortAllProducts();
  }

  selectProduct(index) {
    this.setState({	
			selectedProductIndex: index
    });
    
    document.getElementById('productName').value = this.props.allProducts.viewer.allProducts.edges[index].node.name;
    document.getElementById('productSKU').value = this.props.allProducts.viewer.allProducts.edges[index].node.sku;
    document.getElementById('productPrice').value = this.props.allProducts.viewer.allProducts.edges[index].node.price;
    document.getElementById('productQuantity').value = this.props.allProducts.viewer.allProducts.edges[index].node.quantity;
 
  }

  //CREATE
  createProduct=async () => {
    await this.props.createProduct({
      variables: {
        "product": 
        {
          "name": document.getElementById('productName').value  ,
          "sku": document.getElementById('productSKU').value  ,
          "price": parseFloat(document.getElementById('productPrice').value)  ,
          "quantity": parseInt(document.getElementById('productQuantity').value)  ,
          "categories": document.getElementById('productCategories').value,
          "thumbnails": "",
          "preview": ""
        }
      }
    });
    this.props.allProducts.refetch();
  }

  //UPDATE
  updateProduct=async () => {
    const index = this.state.selectedProductIndex;
    if (index == null) {
      alert('Please select one of products');
      return;
    }
    const productID = this.props.allProducts.viewer.allProducts.edges[index].node.id;

    await this.props.updateProduct({
      variables: {
        "product": 
        {
          "id": productID,
          "name": document.getElementById('productName').value  ,
          "sku": document.getElementById('productSKU').value  ,
          "price": parseFloat(document.getElementById('productPrice').value)  ,
          "quantity": parseInt(document.getElementById('productQuantity').value)  ,
          "categories": document.getElementById('productCategories').value,
          "thumbnails": "",
          "preview": ""
        }
      }
    });
    this.props.allProducts.refetch();
  }

  //DELETE
  deleteProduct=async () => {
    const index = this.state.selectedProductIndex;
    if (index == null) {
      alert('Please select one of products');
      return;
    }
    const productID = this.props.allProducts.viewer.allProducts.edges[index].node.id;

    await this.props.deleteProduct({
      variables: {
        "product": 
        {
          "id": productID,
        }
      }
    });
    
    this.props.allProducts.refetch();
    this.setState({	
			selectedProductIndex: null
    });
  }
  

  render() {

    if (this.props.allProducts && this.props.allProducts.loading) {
      return <div>Loading ...</div>;
    }

    if (this.props.allProducts && this.props.allProducts.error) {
      console.error(this.props.allProducts.error);
      return <div>Error occurred</div>;
    }

    const allProducts = this.props.allProducts.viewer.allProducts.edges;
    
   
    if (allProducts.length === 0) {
     }
    const selectedProductIndex = this.state.selectedProductIndex;
 
    return (

      <div className="row">
        <div className="col-md-8">
          <h2>Products</h2>
          <ul>
          {
            allProducts.map((item, index) => (
              <li>
                <a onClick={this.selectProduct.bind(this, index)}>
                  {item.node.name}
                </a>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="col-md-4">
          <h2>{selectedProductIndex!=null&&allProducts[selectedProductIndex].node.name}</h2>
          <ProductInputForm selected={selectedProductIndex!=null&&allProducts[selectedProductIndex].node.categories}/>
          <button type="button" className="btn btn-primary" onClick={this.createProduct}>Create</button>
          <button type="button" className="btn btn-primary" onClick={this.updateProduct}>Update</button>
          <button type="button" className="btn btn-danger"  onClick={this.deleteProduct}>Remove</button>
          
        </div>
      </div>
    );
  }
}

export default querySet(ManageProducts)

