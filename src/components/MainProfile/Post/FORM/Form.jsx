import React from 'react';
import './Form.css';
import {newOnChangeCreator, SubmitPOSTCreator} from './../../../../useState/state'

const Form = (props) => {
  let newPost = React.createRef()
  let placeholderPostNull = () => {
    newPost.current.placeholder = 'Вы не ввели пост!';
  }
  let SubmitPOST = () => {
    props.dispatch(SubmitPOSTCreator())
    newPost.current.placeholder = 'Мой новый пост...';
  }
  let SubmitPost = () => props.State.ProfoleBLOCK.updatePOST === '' ? placeholderPostNull() : SubmitPOST();
  let newOnChange = () => props.dispatch(newOnChangeCreator(newPost));

  return (
    <>
      <form className='form_post'>
        <label className='ladel_post'>
          <textarea ref={newPost}
                    type='text'
                    className='input_post'
                    placeholder="Мой новый пост..."
                    onChange={newOnChange}
                    value={props.State.ProfoleBLOCK.updatePOST}
                    >
          </textarea>
        </label>
      </form>
      <button className="button_post"
              onClick={SubmitPost}
              >
        Опубликовать
      </button>
    </>
  )
}

export default Form;