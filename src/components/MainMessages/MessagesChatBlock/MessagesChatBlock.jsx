import './Messages_Chat_Block.css'
import MessagesChatHeader from './MessagesChatHeader/MessagesChatHeader'
import MessagesChatMain from './MessagesChatMAIN/MessagesChatMain'

const MessagesChatBlock = (props) => {
  return (
    <div className="Messages_chat_block">
      <MessagesChatHeader dispatch={props.dispatch} State={props.State}/>
      <MessagesChatMain State={props.State}/>
    </div>
  )
}

export default MessagesChatBlock;