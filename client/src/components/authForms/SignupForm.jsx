import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { signUp, error, isLoading } = useSignUp();

    const createUser = async (e) => {
        e.preventDefault();

        await signUp(firstName, lastName, email, password, confirmPassword);
    };

    return (
        <div className="rounded p-4 glass-card w-full max-w-[400px] mb-16">
            <h1 className="mb-6 text-green-600 font-semibold text-lg">
                Sign Up
            </h1>
            <form onSubmit={createUser}>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="signUpFirstName">
                            First Name:
                        </label>
                        <input
                            required
                            className="h-8 rounded text-slate-900 px-2 w-2/3"
                            type="text"
                            id="signUpFirstName"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="signUpLastName">
                            Last Name:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="text"
                            id="signUpLastName"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="signUpEmail">
                            Email:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="text"
                            id="signUpEmail"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="signUpPassword">
                            Password:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="password"
                            id="signUpPassword"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="signUpConfirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="password"
                            id="signUpConfirmPassword"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        disabled={isLoading}
                        className="h-8 bg-green-500 rounded font-bold"
                        type="submit"
                        value="Create Account"
                    />
                    {error && <div className="text-red-500">{error}</div>
                        
                    }
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
