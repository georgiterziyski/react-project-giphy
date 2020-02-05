import React, { Component } from "react";

class Gif extends Component {
  render() {
    return (
<div className="col-md-6">
                <div className="d-flex
                flex-md-row
                flex-column
                border shadow-sm mb-3 bg-white rounded
                single-movie
                ">
                    <img className="movie-image" alt="yo"
                    src={this.props.src}></img>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3">
                            <h4>{this.props.title}</h4>
                            <div className="mt-3 movie-description">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}

export default Gif;
