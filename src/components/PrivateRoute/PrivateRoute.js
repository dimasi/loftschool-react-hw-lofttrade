import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";
import {getIsAuthorized} from "Reducers/auth";

export class PrivateRoute extends PureComponent {
  render() {
    const {
      component: Component, 
      isAuthorized, 
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(PrivateRoute);
