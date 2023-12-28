import { useState } from "react";
import { useLogIn } from "../../hooks/useLogIn";
import Header from "../script-ui/Header";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, error, isLoading } = useLogIn();

    const loginUser = async (e) => {
        e.preventDefault();

            await logIn(email, password);
    };

    return (
        <div className="rounded p-4 pb-8 glass-card md:w-[512px] h-full">
            <Header styles={"pb-2 border-b border-b-purple-500 mb-4"}>Login</Header>
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
                        className="h-8 bg-purple-500 text-slate-100 rounded font-bold"
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
