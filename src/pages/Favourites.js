import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import FavouriteGif from "../components/FavouriteGif";

class Favourites extends Component {

    componentDidMount(){
        this.props.getFavourites('_id title imageUrl')
    }
    renderGifs = () => {
        const gifList = this.props.favourites.map(gif => {
            return <FavouriteGif
            key={gif.id}
            gif={gif}
          />
        })
        return gifList;
    }
    render() {
        return <div className="col-md-3">
            {this.renderGifs()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        favourites: state.favourites
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getFavourites: actions.getFavourites
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(Favourites);