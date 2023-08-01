import { useState } from "react";
import Container from "./script-ui/Container";
import axios from "axios";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user",
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                    darkMode: false,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                axios
                    .post("http://localhost:8000/api/user/login", {
                        email: email,
                    },
                    {withCredentials: true})
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container className=" rounded border-2 p-8 glass-card">
            <h1 className="mb-6 text-green-500 font-semibold text-lg">
                Sign Up
            </h1>
            <form onSubmit={createUser}>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            required
                            className="h-8 rounded text-slate-900 px-2 w-2/3"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="email">
                            Email:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="password">
                            Password:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        className="h-8 bg-green-500 rounded font-bold"
                        type="submit"
                        value="Create Account"
                    />
                </div>
            </form>
        </Container>
    );
};

export default SignupForm;
