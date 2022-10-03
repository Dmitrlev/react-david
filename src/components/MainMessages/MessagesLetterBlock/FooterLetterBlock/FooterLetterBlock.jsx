import './FooterLetterBlock.css'
import FormLetter from './FormLetter/FormLetter'

const FooterLetterBlock = (props) => {
  return (
    <div className="Footer_Letter_Block">
      <FormLetter State={props.State}
                  dispatch={props.dispatch}
                  />
    </div>
  )
}

export default FooterLetterBlock;

