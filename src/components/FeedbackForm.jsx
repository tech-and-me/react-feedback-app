import { useState,useContext } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from "./shared/Card";
import FeedbackContext from '../context/FeedbackContext';





const FeedbackForm = () => {
    
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0);
    const [bnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('');

    const {addFeedback} = useContext(FeedbackContext);

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeeedback = {
                text,
                rating
            }

            addFeedback(newFeeedback);
            setText('');

        }
        
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect onSelect={(circleTicked) => setRating(circleTicked)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisabled={bnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm