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

    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);


    const handleoptionClick = (optionKey) => {
        setSelectedOptions(prev => ({
            ...prev,
            [currentQuestionIndex]: optionKey,
        }));

    }

    const GotoPrev = () => {
        if (currentQuestionIndex > 0) {
            SetcurrentQuestionIndex(currentQuestionIndex - 1)

        }
    }

    const GoForward = () => {
        if (currentQuestionIndex < questions.length - 1) {
            SetcurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Submit the quiz if it's the last question
            let correctCount = 0;
            questions.forEach((q, i) => {
                if (selectedOptions[i] === q.answer) {
                    correctCount++;
                }
            });
            setScore(correctCount);
            setIsQuizSubmitted(true);
        }
    };


    if (!questions.length) {
        return <div className="quiz-page">No questions available. Go back to home.</div>;
    }

    if (isQuizSubmitted) {
        return (
            <div className="quiz-page">
                <div className="resultcard">
                    <h2 className="resulthead">🎉 Quiz Completed!</h2>
                    <p className="resultdeclare">
                        You scored <span>{score}</span> out of {questions.length}
                    </p>
                    <p className="resultsuggest">
                        {score === questions.length
                            ? "🔥 Outstanding! You're a quiz master!"
                            : score >= 8
                                ? "🚀 Great job! Keep it up!"
                                : score >= 5
                                    ? "💪 Good try! Review and improve!"
                                    : "🌱 Don't give up! Try again and grow!"}
                    </p>
                </div>
            </div>
        );
    }


    return (

        <div className='quiz-page'>
            <div className="quiz-title">Quiz Time!</div>
            <div className="quiz-card">
                <div className="quiz-header">
                    <h2>Question</h2>
                    <p>{currentQuestionIndex + 1} of {questions.length}</p>
                </div>

                <div className='question-box'>
                    <h3>{currentQuestion.question}</h3>
                    <div className='options-list'>
                        {Object.entries(currentQuestion.options).map(([key, value]) => (
                            <button
                                key={key}
                                className={`option-btn ${selectedOptions[currentQuestionIndex] === key ? 'selected' : ''}`}
                                onClick={() => handleoptionClick(key)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='navigation-buttons'>
                    <button onClick={GotoPrev} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button
                        onClick={GoForward}
                        disabled={currentQuestionIndex === questions.length && isQuizSubmitted}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                    </button>

                </div>
            </div>
        </div>

    )
}

export default Mainquiz