import React from 'react';
import { BrainCircuit, BookOpen, Award, Users } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="Container">
        <div className="AboutHeader">
          <h1>About QuizWhiz</h1>
          <p className="AboutSubtitle">Learn, Test, and Master Tech Skills</p>
        </div>

        <div className="AboutContent">
          <section className="AboutSection FadeIn">
            <h2>Our Mission</h2>
            <p>
              QuizWhiz is an interactive quiz platform designed for developers, students, and tech enthusiasts to sharpen their skills through AI-powered quizzes. With dynamically generated questions tailored to each subject, real-time scoring, smooth navigation, and responsive design — QuizWhiz turns learning into an engaging experience. Whether you're revising key concepts or exploring new tech domains, QuizWhiz helps you learn actively, track progress, and grow confidently.
            </p>
          </section>

          <section className="AboutFeatures SlideInUp">
            <div className="FeatureCard">
              <div className="FeatureIcon">
                <BookOpen size={24} />
              </div>
              <h3>AI-Generated Quizzes</h3>
              <p>
                Every quiz is freshly crafted using AI, ensuring you get new and challenging questions each time — no repeats, no static sets.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon">
                <BrainCircuit size={24} />
              </div>
              <h3>Wide Subject Coverage</h3>
              <p>
                Explore quizzes on JavaScript, Python, HTML, React, Git, and more. Each topic is designed to test both core and advanced concepts.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon">
                <Award size={24} />
              </div>
              <h3>Instant Results & Feedback</h3>
              <p>
                Know how you performed right away. Score summaries and personalized messages give you motivation and direction for what's next.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon">
                <Users size={24} />
              </div>
              <h3>Effortless & Intuitive UI</h3>
              <p>
                Built with responsiveness and simplicity in mind — QuizWhiz works seamlessly across all devices with smooth navigation and modern design.
              </p>
            </div>
          </section>

          <section className="AboutSection FadeIn">
            <h2>How It Works</h2>
            <p>Start your QuizWhiz journey in just a few clicks:</p>
            <ol className="StepsList">
              <li>
                <div className="StepNumber">1</div>
                <div className="StepContent">
                  <h4>Sign Up or Log In</h4>
                  <p>Create an account using email or Google to personalize your experience and keep track of attempts.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">2</div>
                <div className="StepContent">
                  <h4>Pick a Topic</h4>
                  <p>Browse a variety of subjects like JavaScript, Python, React, Git, and more — all at your fingertips.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">3</div>
                <div className="StepContent">
                  <h4>Start the Quiz</h4>
                  <p>We instantly generate new questions using AI, so every quiz is fresh, relevant, and unpredictable.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">4</div>
                <div className="StepContent">
                  <h4>Answer & Navigate</h4>
                  <p>Select your answers, move between questions easily, and get a smooth, responsive quiz experience.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">5</div>
                <div className="StepContent">
                  <h4>View Results & Improve</h4>
                  <p>See your score instantly and get motivating feedback based on how well you performed.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="AboutSection FadeIn">
            <h2>Our Vision</h2>
            <p>
              We're continuously working to expand our question database, add new features, and improve the learning experience. Our goal is to create the most comprehensive tech learning platform that adapts to the rapidly evolving technology landscape.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
