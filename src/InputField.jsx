function InputField({label, name, value, onChange, type="text", className=""}){
    if(type==="textarea"){
        return(
            <div className="input-wrapper">
                <label htmlFor={name}>{label}</label>
                <textarea 
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={className}
                />
            </div>
        );
    }
    return(
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input 
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}

export default InputField;