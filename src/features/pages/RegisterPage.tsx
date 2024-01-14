import AuthContainer from "../components/AuthContainer"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
  return (
    <div className="pt-10">
      <AuthContainer>
        <RegisterForm />
      </AuthContainer>
    </div>
  )
}

export default RegisterPage;
