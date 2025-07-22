import React, { useState } from 'react';
import {
  Code,
  Languages,
  FileBadge,
  GitBranch,
  BrainCircuit,
  Boxes,
  Layers,
  ScrollText,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Wrench,
  Bug,
  Palette,
  MonitorSmartphone,
  BarChart3,
  FlaskConical,
  BookOpen,
  Command,
} from 'lucide-react';
import SearchBar from '../components/quiz/SearchBar.jsx'
import { SubjectCard } from '../components/quiz/SubjectCard.jsx';
import './HomePage.css'

function Home() {
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
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <ShieldCheck size={24} />,
      description: 'Explore concepts like encryption, network security, authentication, and threat mitigation.',
      questionsCount: 10,
    },
    {
      id: 'computer-science',
      name: 'Computer Science',
      icon: <Cpu size={24} />,
      description: 'Test your understanding of OS, architecture, compilation, memory, and systems thinking.',
      questionsCount: 10,
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: <Wrench size={24} />,
      description: 'Assess your knowledge on CI/CD, infrastructure as code, containers, and monitoring.',
      questionsCount: 10,
    },
    {
      id: 'debugging',
      name: 'Debugging',
      icon: <Bug size={24} />,
      description: 'Challenge yourself with practical debugging strategies and real-world scenarios.',
      questionsCount: 10,
    },
    {
      id: 'ui-ux',
      name: 'UI/UX Design',
      icon: <Palette size={24} />,
      description: 'Learn and test your understanding of user interfaces, experience, and accessibility principles.',
      questionsCount: 10,
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      icon: <MonitorSmartphone size={24} />,
      description: 'Explore concepts in native, cross-platform, and responsive mobile application development.',
      questionsCount: 10,
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: <BarChart3 size={24} />,
      description: 'Test your skills in data analysis, visualization, and interpreting results.',
      questionsCount: 10,
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      icon: <FlaskConical size={24} />,
      description: 'Assess your grasp on supervised learning, models, overfitting, and ML frameworks.',
      questionsCount: 10,
    },
    {
      id: 'software-engineering',
      name: 'Software Engineering',
      icon: <BookOpen size={24} />,
      description: 'Test your understanding of design principles, SDLC, architecture patterns, and testing.',
      questionsCount: 10,
    },
    {
      id: 'command-line',
      name: 'Command Line',
      icon: <Command size={24} />,
      description: 'Master terminal commands, shell scripting, and automation workflows.',
      questionsCount: 10,
    }
  ];

  const [SearchQuery, Setsearchquery] = useState('');
  const [subjects, Setsubjects] = useState(allSubjects);

  const handleSearch = (query) => {
    Setsearchquery(query);

    if (!query.trim()) {
      Setsubjects(allSubjects);
      return;
    }

    const filteredSubjects = allSubjects
      .map(subject => {
        const name = subject.name.toLowerCase();
        const description = subject.description.toLowerCase();
        const searchTerm = query.toLowerCase();

        let score = 0;

        if (name === searchTerm) score += 3;
        else if (name.startsWith(searchTerm)) score += 2;
        else if (name.includes(searchTerm)) score += 1;

        if (description.includes(searchTerm)) score += 0.5;

        return { ...subject, score };
      })
      .filter(subject => subject.score > 0)
      .sort((a, b) => b.score - a.score);

    Setsubjects(filteredSubjects);
  };

  return (
    <div>
      <div className='landing-page'>
        <div className='landing-container'>
          <div className='landing-header'>
            <div className='landing-logo'>
              <h1><BrainCircuit size={'5rem'} color='purple' />QuizWhiz</h1>
            </div>
            <p className='landing-tagline'>Test your tech knowledge with interactive quizzes..!</p>

            <SearchBar onSearch={handleSearch} />

            {SearchQuery && (
              <div className="search-results-info">
                Showing {subjects.length} results for "{SearchQuery}"
                {subjects.length === 0 && (
                  <p>No subjects found. Try a different search term.</p>
                )}
              </div>
            )}

            <div className='subjectcards-grid'>
              {
                subjects.map((subject, index) => (
                  <div
                    key={subject.id}
                    className='main-subject'
                    style={{ animationDelay: `${index * 1}s` }}>
                    <SubjectCard subject={subject} />
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
