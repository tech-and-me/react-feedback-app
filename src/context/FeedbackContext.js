import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [isLoading, setIsloading] = useState(true);
    const [feedback, setFeedback] = useState([])

    const innitialStateFeedBack = {
        item:{},
        edit:false
    }
    const [feedbackEditObj,setFeedbackEditObj] = useState(innitialStateFeedBack);

    useEffect(()=>{
        fetchFeedback()
    },[]);

    //Fetch feedback
    const fetchFeedback = async() => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json()
        console.log(data);

        setFeedback(data);
        setIsloading(false);
    }

    //Add feebback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'               
            },
            body:JSON.stringify(newFeedback),
        });

        const data = await response.json();
        // const newFeedback = { ...newFeeedback, id: uuidv4() }; // no need to assign ID since it is coming from the JSON backend so ID has been created already from the backend server
        // console.log(newObj);
        
        setFeedback([data, ...feedback]);
      }

      //Delete feedback
    const deleteFeedback = async (id) => {
        window.confirm("Click Ok to Delete or click cancel.") &&
        await fetch(`/feedback/${id}`, {method: 'DELETE'})
        setFeedback(feedback.filter((item, index) => item.id !== id))
      }

      //Update feedback item
      const updateFeedback = async (id,updItem) => {
        const response = await fetch (`/feedback/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(updItem)
        })

        const data = await response.json();

        console.log(id, updItem);
        setFeedback( 
            feedback.map(item => (item.id === id ? {...item,...data}:item))
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
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
