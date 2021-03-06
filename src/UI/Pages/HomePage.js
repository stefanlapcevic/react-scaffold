import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as homepageActions from "../../actions/homepageActions";

const HomePage = props => (
  <div className="homepage">
    <h1>Home Page</h1>
    <label htmlFor="text">Enter text:</label>
    <input type="text" name="text" onChange={props.textChanged} />
    <button onClick={props.postText}>Post request</button>
    <br />
    <div>{props.loading || props.response["data"]}</div>
  </div>
);

const mapStateToProps = ({ homepage }) => homepage;
const mapDispatchToProps = dispatch => bindActionCreators(homepageActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
