import './PeopleItemDate.css'

const PeopleItemDate = (props) => {
	return (
		<div className='data_people_item'>
			<p>{props.DataNameItem}:</p>
			<span>{props.NameItemText}</span>
		</div>
	)
}

export default PeopleItemDate;

