import './MainMessages.css'
import MessagesChatBlock from './MessagesChatBlock/MessagesChatBlock'
import MessagesLetterBlock from './MessagesLetterBlock/MessagesLetterBlock'
import {Route, Router, Routes} from 'react-router-dom';
import MessagesLetterBlock_back from './MessagesLetterBlock_back/MessagesLetterBlock_back'

const MainMessages = (props) => {
  let renderLetter = props.State.MessagesBLOCK.DialogAllMesseges.map( renderLetterItem => {
    return (
      <Route path={renderLetterItem.id}
             element={<MessagesLetterBlock State={renderLetterItem}
                                           dispatch={props.dispatch}
                                           />}/>
    )
  })

  return (
    <section className='Messages_block'>
      <MessagesChatBlock State={props.State} dispatch={props.dispatch}/>
      <Routes>
        <Route path='/' element={<MessagesLetterBlock_back/>}/>
        {renderLetter}
      </Routes>
    </section>
  )
} 

export default MainMessages; 