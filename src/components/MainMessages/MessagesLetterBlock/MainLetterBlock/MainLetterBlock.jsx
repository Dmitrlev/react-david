import './MainLetterBlock.css'
import Message_ITEM from './Message_ITEM/Message_ITEM'
import React from "react";

let ScrollBottom = React.createRef();
let ScrollBottomLong = React.createRef()

export const _SCROLL_MAIN_BOTTOM = () => {
   ScrollBottom.current.scrollTop = ScrollBottomLong.current.offsetHeight - ScrollBottom.current.offsetHeight
}

const MainLetterBlock = (props) => {

    let messageOutput = props.MeSSeges.map(messageItem => <Message_ITEM MeSSeges={messageItem}
                                                                        dispatch={props.dispatch}
                                                                        foto={props.foto}
                                                                        id={props.id}
                                                                        name={props.name}
                                                                        SizeAvatar={props.SizeAvatar}
    />)

    return (
      <div className="Main_Letter_Block"
           ref={ScrollBottom}
           onLoad={() => _SCROLL_MAIN_BOTTOM()}
      >
        <div className="Main_Letter_Block_inside"
             ref={ScrollBottomLong}
        >
          {messageOutput}
        </div>
      </div>
    )
}
export default MainLetterBlock;