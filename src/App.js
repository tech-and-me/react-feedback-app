import {useState} from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    window.confirm("Click Ok to Delete or click cancel.") && 
    setFeedback (feedback.filter((item,index)=> item.id !== id ))
  }

  return (
    <>
      <Header text="Feedback UI"/>
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
