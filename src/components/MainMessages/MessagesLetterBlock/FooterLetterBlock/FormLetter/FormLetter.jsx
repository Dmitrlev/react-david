import React from "react";
import './FormLetter.css'
import { updateMessagerITEMCreator, checkValueInputMessagCreator } from './../../../../../useState/state';
import {_SCROLL_MAIN_BOTTOM} from './../../MainLetterBlock/MainLetterBlock'

const FormLetter = (props) => {

  const newMessagerLetter = React.createRef()
  const updateMessagerITEM = () => props.dispatch(updateMessagerITEMCreator(newMessagerLetter.current.value, props.State.id))
  const checkValueInputMessag = () => {
                                        props.dispatch(checkValueInputMessagCreator(props.State.id));
                                      }

  const handleSubmit = event => event.preventDefault();

  return (
    <form className='form_Lettel_block_flex' onSubmit={handleSubmit}>
      <input type="text"
             className="input_Lettel"
             placeholder="Напишите сообщение..."
             onChange={updateMessagerITEM}
             ref={newMessagerLetter}
             value={props.State.NewMessagesChange}
      ></input>
      <button onClick={checkValueInputMessag}></button>
    </form>
  )
}

export default FormLetter;