import React, { Component } from "react";
import Gif from "../components/Gif";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount(){
    this.findGifs();
}


  handleKeyPress = e => {
    if(e.key === 'Enter'){
    }
}
  handleChange = e => {
    this.setState({
        search: e.target.value
    });
}
  findGifs = () => {
    this.props.getGifs({
        //search: "dad"
    });
  };
  getGifList = () => {
    const gifList = 
    this.props.set_gifs.map( data => {
      return <Gif key={data.id} src={data.url} title={data.title} id={data.id} />
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
          <form className="search">
            <div className="form-row">
              <input
                id="input"
                className="form-control"
                type="text"
                onKeyPress={this.handleKeyPress} 
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="Type to search..."
              ></input>
            </div>
            <div className="form-row2">
              <div className="col-md-3">
                <button
                  id="button"
                  className="btn"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div className="col-md-3 text-align-center">
                <label className="label-view">View: </label>
                <button type="button" className="btn-view">
                  <div id="view">Grid</div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div id="result">{this.getGifList()}</div>
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
      getGifs: actions.getGifs
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapStateToDispatch)(Home);
