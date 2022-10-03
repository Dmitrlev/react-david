import './MainProfile.css';
import WalL from './WALL/Wall.jsx'
import ProfileData from './NameFotoPeople/ProfileData.jsx'
import DatePeople from './PeopleDate/DataPeople.jsx'
import Post from './Post/Post.jsx'

const MainProfile = (props) => {
	return (
		<div className='body_right_profile'>
			<WalL />
			<ProfileData />
			<DatePeople State={props.State} />
			<Post State={props.State}
						dispatch={props.dispatch}
						/>
			<br/><br/><br/><br/><br/><br/>

		</div>
	)
}
export default MainProfile;
