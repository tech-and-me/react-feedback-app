import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import AboutIonLink from './components/shared/AboutIonLink';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route exact path="*"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
