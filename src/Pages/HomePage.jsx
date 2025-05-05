import React, { useState } from 'react';
import {
    Code,
    FileBadge,
    Layers,
    Database,
    GitBranch,
    Cloud,
    Boxes,
    ScrollText,
    BrainCircuit,
    Languages
  } from 'lucide-react';
import SearchBar from '../components/quiz/SearchBar.jsx'
import { SubjectCard } from '../components/quiz/SubjectCard.jsx';
import './HomePage.css'



function Home(){
    const allSubjects = [
        {
          id: 'javascript',
          name: 'JavaScript',
          icon: <Code size={24} />,
          description: 'Test your knowledge of JavaScript fundamentals, ES6 features, and advanced concepts.',
          questionsCount: 10,
        },
        {
          id: 'python',
          name: 'Python',
          icon: <Languages size={24} />,
          description: 'Explore Python concepts from basics to advanced topics like decorators and generators.',
          questionsCount: 10,
        },
        {
          id: 'html-css',
          name: 'HTML & CSS',
          icon: <FileBadge size={24} />,
          description: 'Test your knowledge of semantic HTML, layouts, CSS selectors, and modern techniques.',
          questionsCount: 10,
        },
        {
          id: 'git',
          name: 'Git',
          icon: <GitBranch size={24} />,
          description: 'Challenge yourself with questions about Git workflow, branching strategies, and more.',
          questionsCount: 10,
        },
        {
          id: 'react',
          name: 'React',
          icon: <BrainCircuit size={24} />,
          description: 'Test your understanding of React components, hooks, state management, and performance.',
          questionsCount: 10,
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          icon: <Boxes size={24} />,
          description: 'Explore Node.js modules, Express, async patterns, and server-side JavaScript concepts.',
          questionsCount: 10,
        },
        {
          id: 'data-structures',
          name: 'Data Structures',
          icon: <Layers size={24} />,
          description: 'Challenge yourself with questions on arrays, linked lists, trees, graphs, and more.',
          questionsCount: 10,
        },
        {
          id: 'algorithms',
          name: 'Algorithms',
          icon: <ScrollText size={24} />,
          description: 'Test your knowledge of sorting, searching, dynamic programming, and algorithm complexity.',
          questionsCount: 10,
        },
        {
          id: 'databases',
          name: 'Databases',
          icon: <Database size={24} />,
          description: 'Explore SQL, NoSQL, indexing, transactions, and database design concepts.',
          questionsCount: 10,
        },
        {
          id: 'cloud',
          name: 'Cloud Computing',
          icon: <Cloud size={24} />,
          description: 'Test your knowledge of cloud services, deployment models, and cloud architecture.',
          questionsCount: 10,
        }
      ];

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

                        <div className='subjectcards-grid'>
                            {
                                allSubjects.map((subject,index)=>(
                                    <div 
                                    key={subject.id}
                                    className='main-subject'
                                    style={{animationDelay: `${index * 1}s`}}>
                                        <SubjectCard subject={subject}/>
                                    </div>
                                )

                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home