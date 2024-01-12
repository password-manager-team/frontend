import AuthContainer from "./AuthContainer";

const LoginForm = () => {
    return (
        <form className="flex flex-col gap-4">
            <div>
                <h2 className="text-2xl font-semibold text-center">Sign In</h2>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
                <div className="flex gap-2 items-center">
                    <input type="checkbox"></input>
                    <p className="text-sm font-medium">Remember Email</p>
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
                <a href="#" className="block mb-2 text-sm font-medium text-gray-900">Get Password Hint</a>
            </div>
            <div>
                <button className="bg-blue-400 text-sm font-medium text-white w-full rounded-lg p-2">Sign In</button>
            </div>
        </form>
    )
}

export default LoginForm;