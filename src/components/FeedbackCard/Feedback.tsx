import React from 'react';
import quotes from '../../assets/quotes.svg';
import './feedback.css';

interface FeedbackCardProps {
  content: string;
  name: string;
  title: string;
  img: string;
}

const Feedback: React.FC<FeedbackCardProps> = ({ content, name, title, img }) => (
  <div className="feedback-card">
    <img src={quotes} alt="double_quotes" className="quote-icon" />
    <p className="feedback-content">{content}</p>
    <div className="feedback-author">
      <img src={img} alt={name} className="author-image" />
      <div className="author-info">
        <h4 className="author-name">{name}</h4>
        <p className="author-title">{title}</p>
      </div>
    </div>
  </div>
);

export default Feedback;
