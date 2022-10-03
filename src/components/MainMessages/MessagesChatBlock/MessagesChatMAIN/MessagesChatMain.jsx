import './MessagesChatMain.css';
import ItemChat from './ItemChat/ItemChat';


const MessagesChatMain = (props) => {

  let dialogRENDER = props.State.MessagesBLOCK.DialogAllMesseges.map( dialogITEM => {
    return (
      <ItemChat State={dialogITEM} />
    )
  })

  return(
    <section className="Messages_chat_main">
      {dialogRENDER}
    </section>
  )
}

export default MessagesChatMain;