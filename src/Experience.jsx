// import { useState } from "react";
import InputField from "./InputField";

function Experience({formData,setFormData}){

    function handleChange(event){
        const {name,value} = event.target;
        setFormData({...formData,[name]: value});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Practical Experience</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Company Name"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Position Name"
                        name="position"
                        type="text"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Main Responsibilities"
                        name="responsibilities"
                        type="textarea"
                        value={formData.responsibilities}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Start Date"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="End Date"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
        
    )
}

export default Experience