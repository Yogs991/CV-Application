function InputField({label, name, value, onChange, type="text"}){
    if(type==="textarea"){
        return(
            <div>
                <label htmlFor={name}>{label}</label>
                <textarea 
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField;