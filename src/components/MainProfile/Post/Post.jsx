import './Post.css';
import PostName from './PostName/PostName.jsx'
import Form from './FORM/Form.jsx'
import MyPostBlock from './MyPostAll/MyPostAll.jsx'

const Post = (props) => {
  return (
    <div className='Post_block'>
      <PostName />
      <Form State={props.State}
            dispatch={props.dispatch}
            />
      <MyPostBlock State={props.State} />
    </div>  
  )
}

export default Post;