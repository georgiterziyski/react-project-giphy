import React from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addGifToUser} from '../redux/actions';

const Gif = props => {
  const currentUserId = useSelector(state => state.currentUser._id);
  const dispatch = useDispatch();

  const changeView = () => {
    if (!props.isToggled) {
      return "card";
    } else {
      return "media";
    }
  }

  const dispatchAddGifToUser = () => {
    const gifToAdd = Object.assign({}, props.gif);
    delete gifToAdd.__typename;
    dispatch(addGifToUser({
      _id: currentUserId,
      gifs: [gifToAdd],
    }, `_id title imageUrl`));
  }
    return <div className={changeView() + ` mb-3 `}>
              <div className={changeView() + `-header`}>
                {props.gif.title}
              </div>
              <div className={changeView() + `-body`}>
                <button type="button" className="btn" onClick={dispatchAddGifToUser}>Добави в любими</button>
                <img className={changeView() + `-img`} src={props.gif.images.original.url} alt={props.gif.title}></img>
              </div>
            </div>
}

export default Gif;
