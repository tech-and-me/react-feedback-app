import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const addFeedback = (newFeeedback) => {
        const newFeedback = { ...newFeeedback, id: uuidv4() };
        // console.log(newObj);
        setFeedback([newFeedback, ...feedback]);
      }


    const deleteFeedback = (id) => {
        window.confirm("Click Ok to Delete or click cancel.") &&
          setFeedback(feedback.filter((item, index) => item.id !== id))
      }



    return <FeedbackContext.Provider
        value={{feedback,deleteFeedback,addFeedback }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
