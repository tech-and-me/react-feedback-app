import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 9
        }
    ])

    const innitialStateFeedBack = {
        item:{},
        edit:false
    }
    const [feedbackEditObj,setFeedbackEditObj] = useState(innitialStateFeedBack);

    //Add feebback
    const addFeedback = (newFeeedback) => {
        const newFeedback = { ...newFeeedback, id: uuidv4() };
        // console.log(newObj);
        setFeedback([newFeedback, ...feedback]);
      }

      //Delete feedback
    const deleteFeedback = (id) => {
        window.confirm("Click Ok to Delete or click cancel.") &&
          setFeedback(feedback.filter((item, index) => item.id !== id))
      }

      //Update feedback item
      const updateFeedback = (id,updItem) => {
        console.log(id, updItem);
        setFeedback( 
            feedback.map(item => (item.id === id ? {...item,...updItem}:item))
            )
           setFeedbackEditObj(innitialStateFeedBack);

        
      }

    //Set item to be updated
      const editFeedback = (item) => {
          setFeedbackEditObj({
              item,
              edit:true
          })
      }

    return <FeedbackContext.Provider
        value={{feedback,
        feedbackEditObj,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
