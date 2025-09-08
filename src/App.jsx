// import { useState } from 'react';
import './App.css'
import './PersonalDetails';
import Details from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';

function App() {
  return(
    <div className='forms'>
      <Details/>
      <Education/>
      <Experience/>
    </div>
  )
}

export default App;
