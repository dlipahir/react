
import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";
import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentiaction-conatiner">
            {/* <h1>this is sign in page</h1> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;