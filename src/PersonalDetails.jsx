// import React from "react";
import { useState } from "react";
import InputField from "./InputField";

function Details(){
    const [formData, setFormData] = useState("");

    function handleChange(event){
        setFormData({...formData,[event.target.name]: event.target.name});
    }

    return(
        <form className="details-form">
            <InputField 
                label="First Name"
                name="First Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />

            <InputField 
                label="Last Name"
                name="Last Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />

            <InputField 
                label="Email"
                name="Email"
                type="Email"
                value={formData.Email}
                onChange={handleChange}
            />

            <InputField 
                label="Phone"
                name="Phone"
                type="Phone"
                value={formData.Phone}
                onChange={handleChange}
            />

            <InputField 
                label="Address"
                name="Address"
                type="text"
                value={formData.Phone}
                onChange={handleChange}
            />
        </form>
    )
}

export default Details;