// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes  from 'prop-types';
 


class CategoryInputForm extends PureComponent {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="categoryName"> Name </label>
          <input type="text" className="form-control" id="categoryName" placeholder="Name"/>
        </div> 
        <div className="form-group">
          <label htmlFor="categoryDescription"> Description </label>
          <input type="text" className="form-control" id="categoryDescription" placeholder="Description"/>
        </div> 
        <div className="form-group">
          <label htmlFor="categoryActive"> isActive </label>
          <input type="checkbox" className="form-control" id="categoryActive" placeholder="isActive"  />
        </div> 
        <div className="form-group">
          <label htmlFor="categorySort"> Sort </label>
          <input type="text" className="form-control" id="categorySort" placeholder="Sort"/>
        </div> 
      </div>
    );
  }
}

export default CategoryInputForm;


