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
            <h1>{detailsData.name}</h1>
            <h1>{educationData.university}</h1>
            <h1>{experienceData.company}</h1>
        </div>
      </div>
  )
}

export default App;
