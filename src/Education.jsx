import { useState } from "react";
import InputField from "./InputField";

function Education(){
    const [formData, setFormData] = useState("");

    function handleChange(event){
        setFormData({...formData,[event.target.name]: event.target.name});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Education</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="University Name"
                        name="University Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Title of Study"
                        name="Title of Study"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Start Date"
                        name="Start Date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="End Date"
                        name="End Date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
        
    )
}

export default Education;