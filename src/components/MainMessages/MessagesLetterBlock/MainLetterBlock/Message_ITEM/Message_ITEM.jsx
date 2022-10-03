import './Message_ITEM.css'
import React from "react";
import check from './../../../../../FOTO/check.svg'

const Message_ITEM = (props) => {

  const THIS_IMG = React.createRef()
  let r;
  const THIS_IMG_CHECK = (ref) => {let r = ref.current.width >= ref.current.height ? true : false}
  let AdaptationAvatar = {
    width: r ? 'auto' : '100%',
    height: r ? '100%' : 'auto',
  }
  const message_date_id = React.createRef()
  const choice_message = el => props.dispatch({
                                                type: 'SELECTION_FOR_DELET',
                                                el: el,
                                                id_people: props.id,
                                              });

  function styleDelet_M(action) {
    let add;
    if(props.MeSSeges.delet_M === true) {
      add = action === 1 ? ' style_choice_message' : ' checkRef'
    } else add = ' '
    return add
  }

  return (
    <div className={'Message_ITEM_block' + styleDelet_M(1)}
         onClick={() => choice_message(message_date_id)}
         data-name={props.MeSSeges.id_M}
         ref={message_date_id}
    >
      <img className={"check" + styleDelet_M(2)}
           src={check}
      ></img>
      <div className='Message_ITEM_block_foto'>
        <img src={props.foto}
             ref={THIS_IMG}
             onLoad={ (el) => THIS_IMG_CHECK(THIS_IMG)}
             style={AdaptationAvatar}
        ></img>
      </div>
      <p><span>{props.name}</span><br/>{props.MeSSeges.content_M}</p>
    </div>
  )
}

export default Message_ITEM;