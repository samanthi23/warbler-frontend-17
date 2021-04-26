import React from "react";
// current route and redirect, import props
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

// make sure to connect to the redux store as well
// make sure map state to props
import { connect } from "react-redux";
// inside of components create a new file named Homepage.js  
import Homepage from "../components/Homepage";

// create a component called Main
// run a function that returns the component
const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
      { /* multiple routes and 404 logic */}
      { /* pass props to Homepage so that the Homepage can route as well */}
      {/* renders a function that renders the Homepage Component*/}
        <Route exact path="/" render={props => <Homepage {...props} />} />
      </Switch>
    </div>
  );
};

// accept state and return an Object
// make sure map state to props
// currentUser
// the homepage will either display the landing page or the timeline of messages
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

// map it to our connect function then wrap mapStateToProps inside
// make sure to connect to the redux store as well
// get props from the router to our component
// then pass in our Main component
export default withRouter(connect(mapStateToProps, null)(Main));
