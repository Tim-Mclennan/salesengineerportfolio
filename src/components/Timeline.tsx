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
            date="May 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Solutions Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Hubspot</h4>
            <p className="bullet-point">Designed and implemented go-to-market solutions supporting Sales and Customer Success, including reusable scripts, API connectors, and account provisioning tools.</p>
            <p className="bullet-point">Built internal tools (With Python & React) used by the GTM team to simulate customer data environments, significantly cutting demo prep time.</p>
            <p className="bullet-point">Served as a technical SME for Mid-market/enterprise deals involving API integrations, SSO, and webhook event handling; contributed to a 17% improvement in enterprise onboarding speed.</p>
            <p className="bullet-point">Led internal enablement sessions for new SEs on API integration and account management best practices.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Solutions Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Zoho CRM</h4>
            <p className="bullet-point">Designed and guided the implementation of customized Zoho CRM solutions for over 50 small and medium-sized businesses, focusing on aligning technology with business needs.</p>
            <p className="bullet-point">Acted as a liaison between Sales, Product, and Engineering to translate customer learning workflows into technical implementation plans.</p>
            <p className="bullet-point">Designed custom reference solutions integrating Zoho's API with third-party platforms, helping reduce implementation time by ~25%.</p>
            <p className="bullet-point">Participated in early-stage beta testing programs for new product capabilities; documented results, reported defects, and provided structured customer feedback.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Dec 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Solutions Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cin7</h4>
            <p className="bullet-point">Delivered tailored pre-sales and implementation solutions for mid-market and enterprise clients integrating Cin7 with ERPs, CRMs, and eCommerce systems.</p>
            <p className="bullet-point">Designed and documented API integration patterns and workflows for over 30 customer projects, including inventory sync, order automation, and user role management.</p>
            <p className="bullet-point">Created reusable Postman collections and CI-ready Python scripts to validate API workflows and accelerate testing during onboarding.</p>
            <p className="bullet-point">Acted as a bridge between Product and Sales to capture customer requirements and translate them into reference architectures for technical teams.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;