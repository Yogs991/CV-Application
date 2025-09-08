import { useState } from "react";
import InputField from "./InputField";

function Experience(){
    const [formData, setFormData] = useState("");

    function handleChange(event){
        setFormData({...formData,[event.target.name]: event.target.name});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Practical Experience</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Company Name"
                        name="Company Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Position Name"
                        name="Position Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Main Responsibilities"
                        name="Main Responsibilities"
                        type="textarea"
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

export default Experience