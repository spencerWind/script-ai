import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Container from "../components/script-ui/Container";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../hooks/useAuthContext";

const LoginPage = () => {
    const { logOut } = useLogOut();
    const { user } = useAuthContext();
    const logOutHandler = () => {
        logOut();
    };

    return (
        <Container className="w-full flex flex-col justify-between">
            <div className="lg:grid grid-cols-10">
                <div className="col-start-2 col-span-3">
                    <SignupForm />
                </div>
                <div className="col-span-3 col-start-7">
                    <LoginForm />
                </div>
            </div>
            <footer className="h-16 flex gap-8 items-center">
            </footer>
        </Container>
    );
};

export default LoginPage;
