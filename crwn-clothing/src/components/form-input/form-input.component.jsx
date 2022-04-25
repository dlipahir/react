import './form-input.styles.scss'
const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
            {/* <input type='text' required onChange={handleChange} name='displayName' value={displayName} /> */}

        </div>
    )
}

export default FormInput;