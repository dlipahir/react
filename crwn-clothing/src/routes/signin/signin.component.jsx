import { signInwithGooglePopup } from "../../utlis/firebase/firebase.utils";

import { createUserDocAuth } from "../../utlis/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInwithGooglePopup();
        //console.log(response)
        const userDocRef = await createUserDocAuth(user)
    }
    return (
        <div>
            <h1>this is sign in page</h1>
            <button onClick={logGoogleUser}>sign in with google</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;