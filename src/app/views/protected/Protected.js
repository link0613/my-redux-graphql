// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import cx             from 'classnames';

import { Dashboard, ManageProducts, ManageCategories } from '../../components';

const components = {
  dashboard: Dashboard,
  managecategories: ManageCategories,
  manageproducts: ManageProducts
}

function tabPanel (panelName) {
  const SpecificPanel = components[panelName];
  return <SpecificPanel/>;
}
class Protected extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views
    currentView:    PropTypes.string.isRequired,
    enterProtected: PropTypes.func.isRequired,
    leaveProtected: PropTypes.func.isRequired
  };

  state = {
    viewEntersAnim: true,
    menuItem: [
      [ 0, "Dashboard", "Dashboard" ],
      [ 1, "Manage Products", "ManageProducts"],
      [ 2, "Manage Categories", "ManageCategories"] 
    ]
  };

  componentDidMount() {
    const { enterProtected } = this.props;
    enterProtected();
  }

  componentWillUnmount() {
    const { leaveProtected } = this.props;
    leaveProtected();
  }

  render() {
    const { viewEntersAnim, menuItem } = this.state;
    return(
      <div className={cx({ "view-enter": viewEntersAnim })}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {
            menuItem.map((item, index) => (
              <li className={`nav-item ${index==0?'active':''}`}>
                <a className="nav-link" id={`${item[2].toLowerCase()}-tab`} data-toggle="tab" href={`#${item[2].toLowerCase()}`} role="tab" aria-controls={item[2].toLowerCase()} aria-selected="true">{item[1]}</a>
              </li>
            ))            
          }
        </ul>

        <div className="tab-content" id="myTabContent">
          {
            menuItem.map((item, index) => (
              <div className={`tab-pane fade in ${index==0?'active':''}`} id={item[2].toLowerCase()} role="tabpanel" aria-labelledby={`${item[2].toLowerCase()}-tab`}>
                {tabPanel(item[2].toLowerCase())}
              </div>
             ))
          }
        </div>

      </div>
    );
  }
}

export default Protected;
