import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './HelpPage.css';

const HelpPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with QuizWhiz?",
      answer: "Create an account by clicking 'Sign Up'. After registering, log in and start taking quizzes from the dashboard."
    },
    {
      question: "How are the quizzes structured?",
      answer: "Each quiz has multiple-choice questions. You'll get instant feedback and see your score at the end."
    },
    {
      question: "Can I retake quizzes?",
      answer: "Yes, you can retake quizzes anytime. Each attempt is saved in your scorecard to track your progress."
    },
    {
      question: "How do I track my progress?",
      answer: "Your results are saved to your profile. Go to 'Scorecard' to view your quiz history and scores."
    },
    {
      question: "Are new quizzes added regularly?",
      answer: "Yes, we frequently add new quizzes on latest technologies. Check back often for new content."
    },
    {
      question: "What if I find an incorrect question or answer?",
      answer: "Use the feedback form to report issues. Include quiz details and explain the problem so we can fix it."
    },
    {
      question: "Can I suggest new quiz topics?",
      answer: "Yes! Share your topic suggestions through the feedback form or contact page."
    },
    {
      question: "Can I practice specific weak areas?",
      answer: "Currently, you can retake full quizzes. We're developing custom quizzes for focused practice in future updates."
    }
  ];

return (
  <div className="HelpPage">
    <div className="container">
      <div className="HelpHeader">
        <h1>Help & FAQ</h1>
        <p className="HelpSubtitle">Find answers to commonly asked questions</p>
      </div>

      <div className="HelpContent">
        <div className="HelpIntro">
          <div className="HelpIntroIcon">
            <HelpCircle size={40} />
          </div>
          <div className="HelpIntroText">
            <h2>Welcome to QuizWhiz Help Center</h2>
            <p>
              Here you'll find answers to frequently asked questions about using QuizWhiz. If you don't find your answer, feel free to contact us.
            </p>
          </div>
        </div>

        <div className="FaqSection">
          <h2>Frequently Asked Questions</h2>
          <div className="FaqList">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`FaqItem ${expandedIndex === index ? 'expanded' : ''}`}
              >
                <div
                  className="FaqQuestion"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3>{faq.question}</h3>
                  <button className="FaqTouchUpDown">
                    {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <div className="FaqAnswer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ContactSection">
          <h2>Still Have Questions?</h2>
          <p>If you couldn't find your answer, reach out to us. We're here to help!</p>
          <div className="ContactOptions">
            <div className="ContactCard">
              <h3>Email Support</h3>
              <p>Email us at <a href="mailto:support@quizwhiz.com">support@quizwhiz.com</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

};

export default HelpPage;
