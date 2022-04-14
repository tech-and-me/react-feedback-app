import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import AboutIonLink from './components/shared/AboutIonLink';
import { FeedbackProvider } from './context/FedbackContext';



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    window.confirm("Click Ok to Delete or click cancel.") &&
      setFeedback(feedback.filter((item, index) => item.id !== id))
  }

  const addFeedback = (newFeeedback) => {
    const newObj = { ...newFeeedback, id: uuidv4() };
    // console.log(newObj);
    setFeedback([newObj, ...feedback]);
  }



  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route exact path="*"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </>
              }
            >
              
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIonLink />
      </Router>
    </FeedbackProvider>

  );
}

export default App;
