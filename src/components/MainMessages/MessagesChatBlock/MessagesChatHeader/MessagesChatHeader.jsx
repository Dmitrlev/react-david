import React from 'react'
import './MessagesChatHeader.css'
import HeaderChatFoto from './search.png'

const MessagesChatHeader = (props) => {

  const InputHeaderChat = React.createRef()
  const SeachChat = () => props.dispatch({
                                            type: 'HEADER_CHAT_SEACH',
                                            valueHeader: InputHeaderChat.current.value
                                         })

  return (
    <section className='Messages_chat_header'>
      <img className='search_header_chat' src={HeaderChatFoto}></img>
      <form className='form_chat_header' onChange={SeachChat}>
        <input type='text'
               ref={InputHeaderChat}
               className='input_header_chat'
               value={props.State.MessagesBLOCK.HeaderChatSeach}
               placeholder="Поиск..."
        >
        </input>
      </form>
    </section>
  )
}

export default MessagesChatHeader;