import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';


const FeedbackList = ({feedback,handleDelete}) => {
  return (
      (!feedback || feedback.length === 0)? 'No feedback to display': <div>{feedback.map((item,index)=>(<FeedbackItem key={index} item={item} handleDelete={handleDelete}/>))}</div>
  )
}


FeedbackList.ropTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,
        })
    )
}
    


export default FeedbackList