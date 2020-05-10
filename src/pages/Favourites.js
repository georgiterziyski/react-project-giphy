import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class Favourites extends Component {

    componentDidMount(){
        this.props.getFavourites('_id title imageUrl')
    }
    renderGifs = () => {
        const gifList = this.props.favourites.map((gif, index) => {
            return  <div key={gif._id} className="col-md-3">
                <div className="card">
                    <img src={gif.imageUrl} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{gif.title}</h5>
                    </div>
                </div>
            </div>
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