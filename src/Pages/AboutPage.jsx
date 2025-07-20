import React from 'react';
import { BrainCircuit, BookOpen, Award, Users } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About QuizWhiz</h1>
          <p className="about-subtitle">Learn, Test, and Master Tech Skills</p>
        </div>

        <div className="about-content">
          <section className="about-section fade-in">
            <h2>Our Mission</h2>
            <p>
              QuizWhiz was created to help developers, students, and tech enthusiasts test and improve 
              their knowledge across various programming languages and technical concepts. We believe 
              that active learning through quizzes is one of the most effective ways to reinforce 
              understanding and identify areas for improvement.
            </p>
          </section>

          <section className="about-features slide-in-up">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={24} />
              </div>
              <h3>Learning-Focused</h3>
              <p>
                Our quizzes are designed not just to test but to teach. Each question helps reinforce 
                key concepts in programming and computer science.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BrainCircuit size={24} />
              </div>
              <h3>Comprehensive Topics</h3>
              <p>
                From front-end technologies to algorithms and data structures, we cover the full 
                spectrum of technical knowledge needed in today's tech landscape.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={24} />
              </div>
              <h3>Track Progress</h3>
              <p>
                Monitor your learning journey with detailed scorecards that show your strengths and areas 
                for improvement across different tech domains.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Community Driven</h3>
              <p>
                Our questions are regularly updated based on industry trends and community feedback 
                to ensure relevance and accuracy.
              </p>
            </div>
          </section>

          <section className="about-section fade-in">
            <h2>How It Works</h2>
            <p>
              Getting started with QuizWhiz is simple:
            </p>
            <ol className="steps-list">
              <li>
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Create an Account</h4>
                  <p>Sign up to track your progress and save your quiz results over time.</p>
                </div>
              </li>
              <li>
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Choose a Subject</h4>
                  <p>Select from a wide range of technology topics based on your interests or learning goals.</p>
                </div>
              </li>
              <li>
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Take Quizzes</h4>
                  <p>Answer multiple-choice questions designed to test your knowledge and understanding.</p>
                </div>
              </li>
              <li>
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Review Results</h4>
                  <p>See your score and review the correct answers to learn from any mistakes.</p>
                </div>
              </li>
              <li>
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Track Progress</h4>
                  <p>Visit your scorecard to see how you're improving over time across different subjects.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="about-section fade-in">
            <h2>Our Vision</h2>
            <p>
              We're continuously working to expand our question database, add new features, and improve 
              the learning experience. Our goal is to create the most comprehensive tech learning platform 
              that adapts to the rapidly evolving technology landscape.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;