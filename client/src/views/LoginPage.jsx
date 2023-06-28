import SignupForm from "../components/SignupForm";
import Container from "../components/script-ui/Container";

const LoginPage = () => {
    return (
        <Container className="w-full flex flex-col justify-between">
            <header className="h-16 flex items-center justify-between">
                <h1>Script Finances</h1>
            </header>
            <div className="grid grid-cols-10">
                <div className="col-start-2 col-span-3">
                    <SignupForm />
                </div>
                <div className="col-span-3 col-start-7"></div>
            </div>
            <footer className="h-16"></footer>
        </Container>
    );
};

export default LoginPage;
