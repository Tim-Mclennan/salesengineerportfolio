import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Sales Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Atlassian</h4>
            <p className="bullet-point">Lead technical sales engagements for Atlassian's suite of enterprise collaboration and workflow solutions, consistently exceeding quarterly sales targets by an average of 15%.</p>
            <p className="bullet-point">Delivered over 30 successful proof-of-concept (POC) demonstrations, effectively showcasing the value and capabilities of Atlassian products and accelerating client adoption.</p>
            <p className="bullet-point">Collaborated with account executives to understand complex client requirements and architect solutions to address their specific pain points - resulting in a 86% POC-to-close conversion rate for technically supported opportunities.</p>
            <p className="bullet-point">Built strong relationships with key technical stakeholders within client organisations, serving as a trusted advisor and technical expert throughout the sales cycle.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Solutions Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Zoho CRM</h4>
            <p className="bullet-point">Architected and oversaw the implementation of custom solutions for over 50 small and medium-sized businesses.</p>
            <p className="bullet-point">Contributed to a 12% growth in Zoho CRM adoption within assigned territory through proactive engagement in technical discussions and translating complex requirements into actionable plans.</p>
            <p className="bullet-point">Trained over 20 Account Executives on Zoho's technical capabilities, leading to a more technically proficient sales force and improved customer engagement.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Dec 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Commonwealth Bank</h4>
            <p className="bullet-point">Designed & developed a custom analytics dashboard for home owners, enabling real-time user behaviour insights that drove a 10% increase in feature adoption.</p>
            <p className="bullet-point">Contributed to cross-functional project teams, ensuring timely delivery of features that elevated customer satisfaction and engagement.</p>
            <p className="bullet-point">Wrote clean and maintainable code, following best practices and coding standards for a high-scale web environment.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;