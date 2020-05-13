import React from "react";
import {useDispatch} from 'react-redux';
import {deleteGif} from '../redux/actions';

const FavouriteGif = props => {

  const dispatch = useDispatch();

  const dispatchDeleteGif = () => {
    dispatch(deleteGif({
      _id: props.gif._id
    }, `_id title imageUrl`));
  }
    return <div className="card mb-3">
              <div className="crad-header">
                {props.gif.title}
              </div>
              <div className="card-body">
                <img className="card-img" src={props.gif.imageUrl} alt={props.gif.title}></img>
              </div>
              <button type="button" className="btn" onClick={dispatchDeleteGif}>Премахни от любими</button>
            </div>
}

export default FavouriteGif;
