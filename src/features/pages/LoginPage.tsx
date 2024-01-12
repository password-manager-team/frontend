import AuthContainer from "../components/AuthContainer"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
    return (
        <div className="pt-10">
            <AuthContainer>
                <LoginForm />
            </AuthContainer>
        </div>
    )
}

export default LoginPage;