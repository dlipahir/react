import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utlis/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button.component";



const DefaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(DefaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    //console.log(DefaultFormFields)
    // console.log(formFields)
    // console.log(displayName)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };
    const loggoogleUser = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) { alert("passward does not match"); return; }
        try {
            const resourse = await createAuthUserWithEmailAndPassword(email, password);
            console.log(resourse);
        } catch (error) {
            console.log('error occured', error)
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with email and password</span>
            <form onSubmit={loggoogleUser}>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type="submit">sign Up</Button>
            </form>
        </div>
    );
};
export default SignUpForm;