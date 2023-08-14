import { useState } from "react";
import { useLogIn } from "../hooks/useLogin";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, error, isLoading } = useLogIn();

    const loginUser = async (e) => {
        e.preventDefault();

            await logIn(email, password);
    };

    return (
        <div className="rounded p-4 glass-card w-full max-w-[400px] h-max">
            <h1 className="mb-6 text-green-600 font-semibold text-lg">
                Log In
            </h1>
            <form onSubmit={loginUser}>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="loginEmail">
                            Email:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="email"
                            id="loginEmail"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <label
                            className="w-24 text-slate-900 dark:text-slate-100"
                            htmlFor="loginPassword">
                            Password:
                        </label>
                        <input
                            required
                            className="h-8 w-2/3 rounded text-slate-900 px-2"
                            type="password"
                            id="loginPassword"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <input
                        disabled={isLoading}
                        className="h-8 bg-green-500 text-slate-900 rounded font-bold"
                        type="submit"
                        value="Login"
                    />
                    {error && <div className="text-red-500">{error}</div>}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
