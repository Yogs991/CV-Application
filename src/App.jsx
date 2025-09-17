import './App.css'
import './PersonalDetails';
import { useState } from 'react';
import Details from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';

function App() {
  const [detailsData, setDetailsData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});

  return(
      <div className='container'>
        <div className='forms'>
          <Details formData={detailsData} setFormData={setDetailsData}/>
          <Education formData={educationData} setFormData={setEducationData}/>
          <Experience formData={experienceData} setFormData={setExperienceData}/>
        </div>
        <div className='resume'>
          <div className="resume-header">
            <div className="full-name">
              {detailsData.firstName}
              {detailsData.lastName}
            </div>
            <div className="job-title">
              <h3>WEB DEVELOPER</h3>
            </div>
          </div>
          <div className="main-content">
            <div className="resume-section">
              <div className="resume-heading">
                <h3>PROFILE</h3>
              </div>
              <div className="profile-summary">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <hr />
            <div className="resume-section">
              <div className="resume-heading">
                <h3>WORK EXPERIENCE</h3>
              </div>
              <div className="experience">
                <div className="company">
                  <h3>{experienceData.company}</h3>
                </div>
                <div className="period">
                  <p>{experienceData.startDate} - {experienceData.endDate}</p>
                </div>
                <div className="position">
                  <h4>{experienceData.position}</h4>
                </div>
                <div className='description'>
                  <p>{experienceData.responsibilities}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="resume-section">
              <div className="resume-heading">
                <h3>EDUCATION</h3>
              </div>
              <div className='experience'>
                <div className="course">
                  <h3>{educationData.university}</h3>
                </div>
                <div className="period">
                  <p>{educationData.startDate} - {educationData.endDate}</p>
                </div>
                <div className="studies">
                  <h4>{educationData.study}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="resume-section">
              <div className="resume-heading">
                <h3>CONTACT</h3>
              </div>
              <div className="contact-info">
                <ul>
                  <li>{detailsData.email}</li>
                  <li>{detailsData.phone}</li>
                  <li>{detailsData.address}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
