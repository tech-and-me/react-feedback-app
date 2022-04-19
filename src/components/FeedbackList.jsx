import { motion, AnimatePresence } from 'framer-motion';
import {useContext} from 'react';
import FeedbackItem from './FeedbackItem';
// import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext);

    return (
        (!feedback || feedback.length === 0) ? 'No feedback to display'
            : <div className='feedback-list'>
                <AnimatePresence>
                    {feedback.map((item, index) =>
                    (<motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem key={index} item={item} />
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>
    )
}


// FeedbackList.ropTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }



export default FeedbackList