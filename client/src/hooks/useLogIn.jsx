import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogIn = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const logIn = async (
        email,
        password
    ) => {
        setIsLoading(true);
        setError(null);

        axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email: email,
                    password: password,
                    darkMode: false,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("user", JSON.stringify(res));
                dispatch({ type: "LOGIN", payload: res.data.user });
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.error);
                console.log(err);
            });
    };

    return { logIn, isLoading, error };
};
