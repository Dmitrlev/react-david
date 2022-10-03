import './MyPostAll.css';
import PostItem from './PostItem/PostItem';

const MyPostAll = (props) => {
  let POST = props.State.ProfoleBLOCK.postITEM.map( POSTItem => {
    return (
      <PostItem text={POSTItem.text}/>
    )
  });

  return (
    <div className='My_Post_Block'>
      {POST}
    </div>
  )
}

export default MyPostAll;