import './PostItem.css'
import FotoProFiLe from './../../../NameFotoPeople/FotoProfileBlock/kraint.png'


const PostItem = (props) => {
    return (
      <div className='My_Post_Item'>
        <div className='My_Post_Item_foto_block'>
          <a href='#'><img src={FotoProFiLe}></img></a>
        </div>
        <p>{props.text}</p>
      </div>
    )
}

export default PostItem;