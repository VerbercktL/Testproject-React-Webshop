import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>Error</h1>
            <h2>Oeps, hier loopt iets mis</h2>
            <h3>
              De gevraagde URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              bestaat helaas niet.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
