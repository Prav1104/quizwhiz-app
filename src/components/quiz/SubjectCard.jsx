// import React from 'react';
// import './SubjectCard.css';

// export function SubjectCard({subject}){

//     return(
//         <div className='subject-card'>
//             <div className='subjectcard-logo'>{subject.icon}</div>
//             <h3 className='subjectcard-title'>{subject.name}</h3>
//             <p className='subjectcard-description'>{subject.description}</p>
//             <div className='subjectcard-details'>
//                 <span className='subjectcard-questions'>{subject.questionsCount} questions</span>
                
//             </div>
//              {/* Have to add the take quiz functionality */}
//             <button className='subjectcard-submit'  >Take Quiz</button>
//         </div>
//     )
// }


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchAIQuestions } from '../../services/OpenrouterAPI'; // Adjust path as needed
// import './SubjectCard.css';

// export function SubjectCard({ subject }) {
//   const navigate = useNavigate();

//   const handleTakeQuiz = async () => {
//     try {
//       const questions = await fetchAIQuestions(subject.name);
//       console.log('Fetched questions:', questions); // AI-based question generation
//       navigate('/quiz', { state: { questions } }); // Send to Mainquiz page
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//       alert('❌ Failed to load quiz questions. Please try again later.');
//     }
//   };

//   return (
//     <div className='subject-card'>
//       <div className='subjectcard-logo'>{subject.icon}</div>
//       <h3 className='subjectcard-title'>{subject.name}</h3>
//       <p className='subjectcard-description'>{subject.description}</p>
//       <div className='subjectcard-details'>
//         <span className='subjectcard-questions'>{subject.questionsCount} questions</span>
//       </div>
//       <button className='subjectcard-submit' onClick={handleTakeQuiz}>
//         Take Quiz
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAIQuestions } from '../../services/OpenrouterAPI';
import './SubjectCard.css';

export function SubjectCard({ subject }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleTakeQuiz = async () => {
    setLoading(true); // Show message
    try {
      const questions = await fetchAIQuestions(subject.name);
      navigate('/quiz', { state: { questions } });
    } catch (error) {
      console.error('Error fetching questions:', error);
      alert('❌ Failed to load quiz questions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='subject-card'>
      <div className='subjectcard-logo'>{subject.icon}</div>
      <h3 className='subjectcard-title'>{subject.name}</h3>
      <p className='subjectcard-description'>{subject.description}</p>
      <div className='subjectcard-details'>
        <span className='subjectcard-questions'>{subject.questionsCount} questions</span>
      </div>

      {
        loading ? (
          <p className='loading-text'>⏳ Please give us a second while we prepare your quiz...</p>
        ) : (
          <button className='subjectcard-submit' onClick={handleTakeQuiz}>
            Take Quiz
          </button>
        )
      }
    </div>
  );
}

