import './ProfileData.css';
import FotoProfileBlock from './FotoProfileBlock/FotoProfileBlock.jsx'
import NameProfileBlock from './NameProfileBlock/NameProfileBlock.jsx'


const ProfileData = () => {
  return (
    <div className='profile_data'>
      <FotoProfileBlock />
      <NameProfileBlock />
    </div>
  )
}

export default ProfileData;