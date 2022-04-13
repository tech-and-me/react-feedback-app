import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';


const FeedbackList = ({ feedback, handleDelete }) => {
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
                        <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>
    )
}


FeedbackList.ropTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}



export default FeedbackList