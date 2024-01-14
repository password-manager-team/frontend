import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-center">Get Started</h2>
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
        <input type="email" id="email" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input type="password" id="password" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Repeat Password</label>
        <input type="password" id="repeat-password" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password Hint</label>
        <input type="text" id="password-hint" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2 items-center">
            <input type="checkbox"></input>
            <p className="text-sm font-medium">Terms of Service</p>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox"></input>
            <p className="text-sm font-medium">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button className="bg-blue-400 text-sm font-medium text-white w-full rounded-lg p-2">
          Register
        </button>
        <p className="text-sm font-medium">Already Registered? Sign in <Link className="text-blue-500 font-semibold" to="/login">here</Link> </p>
      </div>
    </form>
  )
}


export default RegisterForm;
