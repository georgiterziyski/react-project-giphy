import React from "react";
import {useDispatch} from 'react-redux';
import {addGifToUser} from '../redux/actions';

const Gif = props => {

  const dispatch = useDispatch();

  const changeView = () => {
    if (!props.isToggled) {
      return "card";
    } else {
      return "media";
    }
  }

  const dispatchAddGifToUser = () => {
    const title = props.gif.title;
    const imageUrl = props.gif.images.original.url;
    dispatch(addGifToUser({
      title,
      imageUrl
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
