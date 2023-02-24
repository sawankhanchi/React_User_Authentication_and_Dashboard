import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

interface Errors {
    username?: string;
    password?: string;
}

function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({});

    const dispatch = useDispatch()
    const history = useHistory();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const store = useSelector((reduxState: { auth: { isLoggedIn: boolean } }) => reduxState.auth)

    if (store.isLoggedIn) {
        return <Redirect to="/dashboard" />
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: Errors = {};
        if (!username) {
            errors.username = "Please enter a valid email";
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            errors.username = "Please enter a valid email";
        }
        if (!password) {
            errors.password = "Please enter a password";
        }
        setErrors(errors);
        if (username === process.env.REACT_APP_email && password === process.env.REACT_APP_password) {
            alert(`Welcome back!`);
            dispatch({ type: 'LOGIN_USER' });
            window.localStorage.setItem('Login', 'true')
            history.push('/dashboard');
        } else if (username && password) {
            alert("Invalid email or password.");
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col md:justify-center min-h-screen">
            <div className="max-w-md mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Log in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Username
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && <p className="mt-2 text-sm text-red-600">{username ? '' : errors.username}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="mb-6 relative">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            {showPassword ? (
                                <EyeOffIcon
                                    className="h-6 w-6 text-gray-500 absolute -bottom-1 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            ) : (
                                <EyeIcon
                                    className="h-6 w-6 text-gray-500 absolute -bottom-1 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleShowPassword}
                                />
                            )}
                        </div>
                        {errors.password && <p className="-mt-4 text-sm text-red-600">{password ? '' : errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        aria-label="Login"
                        className="bg-blue-500 hover:bg-blue-600
                      text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Log in
                    </button>
                </form>
                <div className="text-center mt-5">
                    <a href="/register" className="text-gray-700 font-bold hover:underline">
                        Don't have an account? Register now.
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
