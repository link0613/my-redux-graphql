// @flow weak
import React, {
  Component
}                             from 'react';
import PropTypes              from 'prop-types';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Product }               from '../../views';
 


class ConnectedProduct extends Component {
  static propTypes = {
    // react-router 4:
    selectedCategory:    PropTypes.string,
  }
  render() {
    const {selectedCategory} = this.props;
    return (
      <Product selectedCategory={selectedCategory} enterProduct={viewsActions.enterProduct} leaveProduct={viewsActions.leaveProduct}/>
    )
  }
}

export default ConnectedProduct;
 

 
 