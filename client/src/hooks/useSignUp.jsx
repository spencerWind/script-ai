import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signUp = async (
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    ) => {
        setIsLoading(true);
        setError(null);

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
                console.log(res.data);
                localStorage.setItem("user", JSON.stringify(res));
                dispatch({ type: "LOGIN", payload: res.data.user });
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.response.data.error);
                console.log(err);
            });
    };

    return { signUp, isLoading, error };
};
