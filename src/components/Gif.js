import React, { Component } from "react";

class Gif extends Component {

  changeView = () => {
    if (!this.props.isToggled) {
      return "card";
    } else {
      return "media";
    }
  };
  render() {
    return (
            <div className={this.changeView() + ` mb-3 `}>
              <div className={this.changeView() + `-header`}>
                {this.props.title}
              </div>
              <div className={this.changeView() + `-body`}>
                <img className={this.changeView() + `-img`} src={this.props.src} alt={this.props.title}></img>
              </div>
            </div>
    );
  }
}

export default Gif;
