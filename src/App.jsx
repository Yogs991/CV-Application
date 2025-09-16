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
        <div className='preview'>
          <h1>Personal Information</h1>
          <div className='preview-details'>
            <h2>{detailsData.firstName}</h2>
            <h2>{detailsData.lastName}</h2>
            <p>{detailsData.email}</p>
            <p>{detailsData.phone}</p>
            <p>{detailsData.address}</p>
          </div>
          <hr />
          <h1>Education</h1>
          <div className='preview-education'>
            <h2>{educationData.university}</h2>
            <h3>{educationData.study}</h3>
            <p>{educationData.startDate}</p>
            <p>{educationData.endDate}</p>
          </div>
          <hr />
          <h1>Experience</h1>
          <div className='preview-experience'>
            <h2>{experienceData.company}</h2>
            <h3>{experienceData.position}</h3>
            <p>{experienceData.responsibilities}</p>
            <p>{experienceData.startDate}</p>
            <p>{experienceData.endDate}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
