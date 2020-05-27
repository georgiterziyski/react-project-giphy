import React from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addGifToUser} from '../redux/actions';

const Gif = props => {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const changeView = () => {
    if (!props.isToggled) {
      return "card";
    } else {
      return "media";
    }
  }

  const dispatchAddGifToUser = () => {
    const _id = props.gif.id;
    const title = props.gif.title;
    const imageUrl = props.gif.url;
    debugger
    dispatch(addGifToUser({
      _id: currentUser._id,
      email: currentUser.email,
      username: currentUser.username,
      password: currentUser.password,
      gifs: {_id, title, imageUrl},
    }));
  }
    return <div className={changeView() + ` mb-3 `}>
              <div className={changeView() + `-header`}>
                {props.gif.title}
              </div>
              <div className={changeView() + `-body`}>
                {currentUser._id ? (<button type="button" className="btn" onClick={dispatchAddGifToUser}>Добави в любими</button>): (<div/>)}
                <img className={changeView() + `-img`} src={props.gif.images.original.url} alt={props.gif.title}></img>
              </div>
            </div>
}

export default Gif;
