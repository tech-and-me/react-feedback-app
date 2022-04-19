import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {
    // const {id,text,rating} = item;
    const {deleteFeedback} = useContext(FeedbackContext);
 
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)}  className='close'><FaTimes color='purple' /></button>
            <div className=''>
                {item.text}
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


export default FeedbackItem