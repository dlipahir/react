import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocAuth } from "../../utlis/firebase/firebase.utils";
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
    const resetFormFields = () => {
        setFormFields(DefaultFormFields);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            // setCurrentUser(user);


            await createUserDocAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with email and password</span>
            <form onSubmit={handleSubmit}>
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