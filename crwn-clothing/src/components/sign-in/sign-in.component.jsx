import { async } from "@firebase/util";
import { useState, useContext } from "react";
import { signInwithGooglePopup, createUserDocAuth, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword } from "../../utlis/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import './sign-in.styles.scss'


const DefaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(DefaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(DefaultFormFields);
    }
    //console.log(DefaultFormFields)
    // console.log(formFields)
    // console.log(displayName)

    const signInWithGoogle = async () => {
        await signInwithGooglePopup();
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response);
            // setCurrentUser(user)
            resetFormFields();
        } catch (error) {
            console.log(error);
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no User associated with this email');
                    break;
                default:
                    console.log(error);

            }
        }

    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>SignIn with email and password</span>
            <form onSubmit={handleSubmit}>
                {/* <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} /> */}
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
                {/* <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} /> */}
                <div className="button-cont">
                    <Button type="submit">sign In</Button>
                    <Button type="button" ButtonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google signIn</Button>
                </div>
            </form>
        </div>
    );
};
export default SignInForm;