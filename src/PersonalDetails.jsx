// import React from "react";
import { useState } from "react";
import './PersonalDetails.css';

function Details(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    return(
        <>
            <form id="details_form">
                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange = {e=>setName(e.target.value)} />
                <label htmlFor="email">email</label>
                <input id="email" value={email} onChange = {e=>setEmail(e.target.value)} />
                <label htmlFor="phone">phone</label>
                <input id="phone" value={phone} onChange = {e=>setPhone(e.target.value)} />
                <label htmlFor="address">address</label>
                <input id="address" value={address} onChange = {e=>setAddress(e.target.value)} />
            </form>
        </>
    )
}

export default Details;