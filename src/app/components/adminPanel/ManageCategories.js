// @flow weak

import React, {
  PureComponent
}                   from 'react';
import PropTypes    from 'prop-types';
import gql          from 'graphql-tag';
import { graphql }  from 'react-apollo';
import { compose }  from 'react-apollo';
import CategoryInputForm from './CategoryInputForm'

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

const CREATE_CATEGORY = gql`
  mutation createCategory($category: CreateCategoriesInput!) {
    createCategories(input: $category) {
      changedCategories{
        name
        description
        parentID
        isActive
        sort
      }
    } 
  }
`
const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($category: UpdateCategoriesInput!) {
    updateCategories(input: $category) {
      changedCategories {
        id
        name
        description
        parentID
        isActive
        sort
      }
    }
  }
`

const DELETE_CATEGORY = gql`
  mutation DeleteCategory($category: DeleteCategoriesInput!) {
    deleteCategories(input: $category) {
      changedCategories {
        id
      }
    }
  }
`

const querySet = compose (
  graphql(ALL_CATEGORIES, {name: "allCategories"}),
  graphql(CREATE_CATEGORY, {name: "createCategory"}),
  graphql(UPDATE_CATEGORY, {name: "updateCategory"}),
  graphql(DELETE_CATEGORY, {name: "deleteCategory"}),
)


class ManageCategories extends PureComponent {

  state = {
    selectedCategoryIndex: null,
  };

  sortAllCategories=async () => {
    await this.props.allCategories({
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
    this.sortAllCategories();
  }

  selectCategory(index) {
    this.setState({	
			selectedCategoryIndex: index
    });
    
    document.getElementById('categoryName').value = this.props.allCategories.viewer.allCategories.edges[index].node.name;
    document.getElementById('categoryDescription').value = this.props.allCategories.viewer.allCategories.edges[index].node.description;
    document.getElementById('categorySort').value = this.props.allCategories.viewer.allCategories.edges[index].node.sort;
    document.getElementById("categoryActive").checked = this.props.allCategories.viewer.allCategories.edges[index].node.isActive;
  }

  //CREATE
  createCategory=async () => {
    await this.props.createCategory({
      variables: {
        "category": 
        {
          "name": document.getElementById('categoryName').value  ,
          "description": document.getElementById('categoryDescription').value  ,
          "isActive": document.getElementById('categoryActive').checked , 
          "parentID": "",
          "sort": parseInt(document.getElementById('categorySort').value)
        }
      }
    });
    this.props.allCategories.refetch();
  }

  //UPDATE
  updateCategory=async () => {
    const index = this.state.selectedCategoryIndex;
    if (index == null) {
      alert('Please select one of categories');
      return;
    }
    const categoryID = this.props.allCategories.viewer.allCategories.edges[index].node.id;

    await this.props.updateCategory({
      variables: {
        "category": 
        {
          "id": categoryID,
          "name": document.getElementById('categoryName').value  ,
          "description": document.getElementById('categoryDescription').value  ,
          "isActive": document.getElementById('categoryActive').checked == true , 
          "parentID": "",
          "sort": parseInt(document.getElementById('categorySort').value)
        }
      }
    });
  }

  //DELETE
  deleteCategory=async () => {
    const index = this.state.selectedCategoryIndex;
    if (index == null) {
      alert('Please select one of categories');
      return;
    }
    const categoryID = this.props.allCategories.viewer.allCategories.edges[index].node.id;

    await this.props.deleteCategory({
      variables: {
        "category": 
        {
          "id": categoryID,
        }
      }
    });

    this.props.allCategories.refetch();
    this.setState({	
			selectedCategoryIndex: null
    });
  }
  

  render() {

    if (this.props.allCategories && this.props.allCategories.loading) {
      return <div>Loading ...</div>;
    }

    if (this.props.allCategories && this.props.allCategories.error) {
      console.error(this.props.allCategories.error);
      return <div>Error occurred</div>;
    }

    const allCategories = this.props.allCategories.viewer.allCategories.edges;
    if (allCategories.length === 0) {
      return <div>No Category</div>;
    }
    const selectedCategoryIndex = this.state.selectedCategoryIndex 

    return (
      <div className="row">
        <div className="col-md-4">
          <h2>Categories</h2>
          <ul>
          {
            allCategories.map((item, index) => (
              <li>
                <a onClick={this.selectCategory.bind(this, index)}>
                  {item.node.name}
                </a>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="col-md-8">
          <h2>{selectedCategoryIndex!=null&&allCategories[selectedCategoryIndex].node.name}</h2>
          <CategoryInputForm/>
          <button type="button" className="btn btn-primary" onClick={this.createCategory}>Create</button>
          <button type="button" className="btn btn-primary" onClick={this.updateCategory}>Update</button>
          <button type="button" className="btn btn-danger"  onClick={this.deleteCategory}>Remove</button>
          
        </div>
      </div>
    );
  }
}

export default querySet(ManageCategories)
//export default graphql(getAllCategories, {name: "allCategories"}) (ManageCategories)

