import React, { Component } from "react";

class Gif extends Component {
  render() {
    return (
            <div className="card mb-3">
              <img className="card-img-top" src={this.props.src} alt=""></img>
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
              </div>
            </div>
    );
  }
}

export default Gif;
