import './MessagesLetterBlock.css'
import HeaderLetterBlock from './HeaderLetterBlock/HeaderLetterBlock'
import MainLetterBlock from './MainLetterBlock/MainLetterBlock'
import FooterLetterBlock from './FooterLetterBlock/FooterLetterBlock'

const MessagesLetterBlock = (props) => {
  return (
    <div className="Messages_letter_block">
      <HeaderLetterBlock State={props.State}
                         SizeAvatar={props.State.SizeAvatar}
                         dispatch={props.dispatch}
                         />
      <MainLetterBlock MeSSeges={props.State.MeSSeges}
                       foto={props.State.foto}
                       id={props.State.id}
                       name={props.State.name}
                       SizeAvatar={props.State.SizeAvatar}
                       dispatch={props.dispatch}
                       />
      <FooterLetterBlock State={props.State}
                         dispatch={props.dispatch}
                         />
    </div>
  )
}

export default MessagesLetterBlock;