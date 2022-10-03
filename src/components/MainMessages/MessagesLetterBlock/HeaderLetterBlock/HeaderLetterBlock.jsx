import './HeaderLetterBlock.css';
import React from "react";

const HeaderLetterBlock = (props) => {

  const THIS_IMG = React.createRef()
  let r;
  const THIS_IMG_CHECK = (ref) => {let r = ref.current.width >= ref.current.height ? true : false}
  let AdaptationAvatar = {
    width: r ? 'auto' : '100%',
    height: r ? '100%' : 'auto',
  }

  function button_block_style() {
    let button_block_style_return;
    for(let i = 0; i < props.State.MeSSeges.length; i++) {
      if (props.State.MeSSeges[i].delet_M === true) {
        button_block_style_return = 'flex'
        i = props.State.MeSSeges.length
      } else {
        button_block_style_return = 'none'
      }
    }
    return button_block_style_return
  }

  const button_dalete_item_messagesRef =
    {
      display: button_block_style(),
    }

  const delete_none = () => props.dispatch({type: 'DELET_CANCEL', id: props.State.id})
  const delete_do = () => props.dispatch({type: 'DELET_DO', id: props.State.id})

  return (
    <div className="Header_Letter_Block">
      <p><span>{props.State.name}</span><span> </span><span>{props.State.surname[0]+'.'}</span></p>
      <div className="button_dalete_item_messages"
           style={button_dalete_item_messagesRef}
           data-name={props.State.id}
      >
        <button onClick={() => delete_none()}>Отмена{' '}<span>{props.State.numberOfSelected}</span></button>
        <button onClick={() => delete_do()}>Удалить</button>
      </div>
      <div className="Header_Letter_Block_foto">
        <img src={props.State.foto}
             ref={THIS_IMG}
             onLoad={ (el) => THIS_IMG_CHECK(THIS_IMG)}
             style={AdaptationAvatar}
        ></img>
      </div>
    </div>
  )
}

export default HeaderLetterBlock;