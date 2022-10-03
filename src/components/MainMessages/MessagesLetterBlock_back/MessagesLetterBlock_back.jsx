import BackLetter_foto from './../../../FOTO/chat_back.png'
import './MessagesLetterBlock_back.css'

const MessagesLetterBlock_back = () => {
  return (
    <div className='MessagesLetterBlock_back'>
      <img src={BackLetter_foto}></img>
      <p>Выберите чат</p>
    </div>
  )
}

export default MessagesLetterBlock_back;