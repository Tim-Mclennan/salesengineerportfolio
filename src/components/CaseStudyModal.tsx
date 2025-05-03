import React from 'react';
import '../assets/styles/CaseStudyModal.scss';

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: {
        title: string;
        thumbnail: string;
        challenge: string;
        solution: string;
        impact: {
            metrics: string[];
            testimonial: string;
            client: string;
        };
        technicalDetails: {
            stack: string[];
            architecture: string;
            challenges: string[];
        };
        certifications: string[];
    };
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <div className="modal-header">
                    <img src={caseStudy.thumbnail} alt={caseStudy.title} className="modal-thumbnail" />
                    <h2>{caseStudy.title}</h2>
                </div>

                <div className="modal-body">
                    <section className="case-study-section">
                        <h3>Challenge</h3>
                        <p>{caseStudy.challenge}</p>
                    </section>

                    <section className="case-study-section">
                        <h3>Solution</h3>
                        <p>{caseStudy.solution}</p>
                    </section>

                    <section className="case-study-section">
                        <h3>Technical Implementation</h3>
                        <div className="tech-stack">
                            {caseStudy.technicalDetails.stack.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <p className="architecture">{caseStudy.technicalDetails.architecture}</p>
                        <ul className="challenges-list">
                            {caseStudy.technicalDetails.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="case-study-section">
                        <h3>Impact & Results</h3>
                        <div className="metrics">
                            {caseStudy.impact.metrics.map((metric, index) => (
                                <span key={index} className="metric">{metric}</span>
                            ))}
                        </div>
                        <div className="testimonial">
                            <p>{caseStudy.impact.testimonial}</p>
                            <span className="client">{caseStudy.impact.client}</span>
                        </div>
                    </section>

                    {caseStudy.certifications.length > 0 && (
                        <section className="case-study-section">
                            <h3>Relevant Certifications</h3>
                            <div className="certifications">
                                {caseStudy.certifications.map((cert, index) => (
                                    <span key={index} className="certification">{cert}</span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal; 