// import React from "react";
// import { useState } from "react";
import InputField from "./InputField";

function Details({formData, setFormData}){
    
    function handleChange(event){
        const {name,value} = event.target;
        setFormData({...formData,[name]: value});
    }

    return(
        <div className="details-container">
            <form className="form">
            <h1>Personal Details</h1>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Email"
                        name="email"
                        type="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <InputField
                        className="input-data" 
                        label="Phone"
                        name="phone"
                        type="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-control">
                    <InputField
                        className="input-data" 
                        label="Address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
        
    )
}

export default Details;