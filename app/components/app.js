import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">BikeshareDash</a>
              </div>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
