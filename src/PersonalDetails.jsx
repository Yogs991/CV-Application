// import React from "react";
import { useState } from "react";
import InputField from "./InputField";

function Details(){
    const [formData, setFormData] = useState("");

    function handleChange(event){
        setFormData({...formData,[event.target.name]: event.target.name});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Personal Details</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="First Name"
                        name="First Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Last Name"
                        name="Last Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Email"
                        name="Email"
                        type="Email"
                        value={formData.Email}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Phone"
                        name="Phone"
                        type="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Address"
                        name="Address"
                        type="text"
                        value={formData.Phone}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
        
    )
}

export default Details;