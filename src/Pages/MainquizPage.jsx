import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MainquizPage.css';

function Mainquiz() {
    const location = useLocation();

    // lists questions and returns an default empty array 
    const { questions = [] } = location.state || {};

    const [currentQuestionIndex, SetcurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const currentQuestion = questions[currentQuestionIndex];

    const handleoptionClick = (optionKey) => {
        setSelectedOptions({
            ...selectedOptions(), [currentQuestionIndex]: optionKey,
        })
    }

    const GotoPrev = () => {
        if (currentQuestionIndex > 0) {
            SetcurrentQuestionIndex(currentQuestionIndex - 1)

        }
    }

    const GoForward = () => {
        if (currentQuestionIndex < questions.length - 1) {
            SetcurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    if (!questions.length) {
        return <div className="quiz-page">No questions available. Go back to home.</div>;
    }

    return (

        <div className='quiz-Page'>
            <div className='quiz-header'>

                <h2>Quiz Time !</h2>
                <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            </div>

            <div className='question-square'>

                <h3>{currentQuestion.question}</h3>
                <div className='option-list'>
                    {Object.entries(currentQuestion.options).map(([key, value]) => (
                        <button
                            key={key}
                            className={`option-btn ${selectedOptions[currentQuestionIndex] === key ? 'selected' : ''}`}
                            onClick={() => handleoptionClick(key)}
                        >
                            <strong>{key.toUpperCase()}.</strong> {value}
                        </button>
                    ))}
                </div>
            </div>


            <div className='Navigation-buttons'>

                <button onClick={GotoPrev} disabled={currentQuestionIndex === 0}>Previous</button>
                <button onClick={GoForward} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
            </div>

        </div>
    )
}

export default Mainquiz