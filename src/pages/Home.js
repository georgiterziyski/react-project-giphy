import React, { Component } from "react";
import Gif from "../components/Gif";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isToggled: false
    };
  }

  componentDidMount() {
    this.findTrendingGifs();
    // Trending gifs are loaded by default.
  }

  findTrendingGifs = () => {
    this.props.getGifs();
  };

  changeIcon = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
    this.changeView(this.state.isToggled);
  };

  changeView = view => {
    if (!view) {

    } else {

    }
  }
  getInputClassName = () => {
    if (!this.state.isToggled) {
      return "fa-th-large";
    } else {
      return "fa-bars";
    }
  };
  onSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    if (search === "") {
      return;
    }
    this.props.searchGifs(search);
    this.setState({
      search: ""
    })
    e.target.value = ""
  }
  handleChange = e => {
    const search = e.target.value;
    this.setState({
      search: search
    });
  };
  searchGifs = () => {
    const search = this.state.search;
    this.props.searchGifs(search);
  };

  getGifList = () => {
    const gifList = this.props.set_gifs.map(data => {
      return (
        <Gif
          isToggled={this.state.isToggled}
          key={data.id}
          src={data.images.original.url}
          title={data.title}
          id={data.id}
        />
      );
    });
    return gifList;
  };

  render() {
    return (
      <div className="container">
        <div className="Header">
          <img
            src="https://fontmeme.com/permalink/191118/4444c38a76080519f37bee751a73515e.png"
            alt=""
            className="img-fluid"
          ></img>
        </div>
        <div className="form-wrapper">
          <form className="search" onSubmit={e => this.onSubmit(e)}>
            <div className="form-row">
              <input
                id="input"
                className="form-control"
                type="text"
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="Type to search..."
              ></input>
            </div>
            <div className="form-row2">
              <div className="col-md-3">
                <button id="button" className="btn" type="submit">
                  Search
                </button>
              </div>
              <div className="col-md-3 text-align-center">
                <button
                  type="button"
                  className="btn-view"
                  onClick={this.changeIcon}
                >
                  <i
                    className={"fa " + this.getInputClassName() + " fa-2x"}
                  ></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div id="result">
          {this.getGifList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    set_gifs: state.set_gifs
  };
};

const mapStateToDispatch = dispatch => {
  return bindActionCreators(
    {
      setGifs: actions.setGifs,
      getGifs: actions.getGifs,
      searchGifs: actions.searchGifs
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);
