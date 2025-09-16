// import { useState } from "react";
import InputField from "./InputField";

function Education({formData, setFormData}){

    function handleChange(event){
        const {name,value} = event.target;
        setFormData({...formData,[name]: value});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Education</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="University Name"
                        name="university"
                        type="text"
                        value={formData.university || ''}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Title of Study"
                        name="study"
                        type="text"
                        value={formData.study || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Start Date"
                        name="startDate"
                        type="date"
                        value={formData.startDate || ''}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="End Date"
                        name="endDate"
                        type="date"
                        value={formData.endDate || ''}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
        
    )
}

export default Education;