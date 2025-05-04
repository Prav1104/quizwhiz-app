import { BrainCircuit } from 'lucide-react';
import React, { useState } from 'react';
import SearchBar from '../components/quiz/SearchBar.jsx'
import './HomePage.css'



function Home(){
    return (
        <div>
            <div className='landing-page'>
                <div className='landing-container'>
                    <div className='landing-header'>
                        <div className='landing-logo'>
                            <h1><BrainCircuit size={'5rem'}/>QuizWhiz</h1>
                        </div>
                        <p className='landing-tagline'>Test your tech knowledge with interactive quizzes..!</p>
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home