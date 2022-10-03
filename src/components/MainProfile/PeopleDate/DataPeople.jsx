import './DataPeople.css'
import PeopleItemDate from './PeopleItemDate/PeopleItemDate'

const DataPeople = (props) => {

  console.log(props.State.ProfoleBLOCK.DatePEOPLE)

  let DATEprofile = props.State.ProfoleBLOCK.DatePEOPLE.map( dateItem => {
    return (
      <PeopleItemDate DataNameItem={dateItem.DataNameITEM} NameItemText={dateItem.NameItemText}/>
    )
  })

  return (
    <div className='data_people_block'>
      {DATEprofile}
    </div>
  ) 
}

export default DataPeople;