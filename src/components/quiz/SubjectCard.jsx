import React from 'react';
import './SubjectCard.css';

export function SubjectCard({subject}){

    return(
        <div className='subject-card'>
            <div className='subjectcard-logo'>{subject.icon}</div>
            <h3 className='subjectcard-title'>{subject.name}</h3>
            <p className='subjectcard-description'>{subject.description}</p>
            <div className='subjectcard-details'>
                <span className='subjectcard-questions'>{subject.questionsCount} questions</span>
                
            </div>
             {/* Have to add the take quiz functionality */}
            <button className='subjectcard-submit'>Take Quiz</button>
        </div>
    )
}