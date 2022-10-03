import './ItemChat.css' 
import {NavLink } from "react-router-dom"
import React from "react";

const ItemChat = (props) => {

  const THIS_IMG = React.createRef()
  let r;
  const THIS_IMG_CHECK = (ref) => {let r = ref.current.width >= ref.current.height ? true : false}
  let AdaptationAvatar = {
    width: r ? 'auto' : '100%',
    height: r ? '100%' : 'auto',
  }

  let HeaderMainChatDiplay = {display: props.State.display}

  return (
    <NavLink to={"/messages/" + props.State.id}
             className='Item_Chat_block'
             style={HeaderMainChatDiplay}>
      <div className='Chat_main_block_foto'>
        <img
          ref={THIS_IMG}
          onLoad={ (el) => THIS_IMG_CHECK(THIS_IMG)}
          style={AdaptationAvatar}
          src={props.State.foto}
          className="fotoChatITEM">
        </img>
      </div>
      <p><span>{props.State.name}</span><span> </span><span>{props.State.surname}</span></p>
    </NavLink>
  )
}
export default ItemChat;