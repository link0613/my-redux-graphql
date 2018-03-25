// @flow weak

import React, {
  PureComponent
}                   from 'react';
import PropTypes          from 'prop-types';
import Humburger          from './humburger/Humburger';
import LeftNav            from './leftNav/LeftNav';
import RightNav           from './rightNav/RightNav';
import gql          from 'graphql-tag';
import { graphql }  from 'react-apollo';
import { compose }  from 'react-apollo';

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
class NavigationBar extends PureComponent {
  static propTypes = {
    brand:                    PropTypes.string,
    userIsAuthenticated:      PropTypes.bool.isRequired,
    handleLeftNavItemClick:   PropTypes.func,
    handleRightNavItemClick:  PropTypes.func,
    navModel:                 PropTypes.shape({
      leftLinks:  PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link : PropTypes.string.isRequired
        })
      ).isRequired,
      rightLinks:  PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link : PropTypes.string.isRequired
        })
      ).isRequired
    }),
    allCategories: PropTypes.object
  }

  render() {
    const {brand, userIsAuthenticated, handleLeftNavItemClick, handleRightNavItemClick, navModel} = this.props;

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


    console.log(allCategories );
    return(
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
            {
              <Humburger />
            }
            <a className="navbar-brand">
              {brand}
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {
                <LeftNav
                  leftLinks={navModel.leftLinks}
                  onLeftNavButtonClick={handleLeftNavItemClick}
                  userIsAuthenticated={userIsAuthenticated}
                />
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {
                <RightNav
                  rightLinks={navModel.rightLinks}
                  onRightNavButtonClick={handleRightNavItemClick}
                  userIsAuthenticated={userIsAuthenticated}
                />
              }
            </ul>
          </div>
        </div>
      </nav>


    )
  }
}
 

export default graphql(ALL_CATEGORIES, {name: "allCategories"}) (NavigationBar);
