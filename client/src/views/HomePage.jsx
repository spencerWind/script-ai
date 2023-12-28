import LoginForm from "../components/authForms/LoginForm";
import SignupForm from "../components/authForms/SignupForm";
import Container from "../components/script-ui/Container";
import Header from "../components/script-ui/Header"

const LoginPage = () => {
    return (
        <div className="">
            <div className="py-32 landing-page-background">
                <Container>
                    <div className="lg:w-3/5">
                        <h2 className="max-lg:text-sm font-bold text-slate-900 mb-2 underline">
                            Script Finance
                        </h2>
                        <h1 className="font-black text-slate-900 text-4xl lg:text-6xl mb-4 leading-none">
                            Unlock your path to financial freedom
                        </h1>
                        <p className="max-lg:text-sm mb-8 font-light text-black">
                            <span className="underline font-normal">
                                Script Finance
                            </span>
                            &nbsp;is a comprehensive personal finance tracker
                            designed to empower individuals on their journey to
                            financial success. With intuitive tools for
                            budgeting, expense tracking, and goal setting,
                            Script Finance helps users take control of their
                            money, make informed decisions, and pave the way
                            towards achieving financial freedom.
                        </p>
                    </div>
                </Container>
            </div>
            <div className="mb-16">
                <Container className={"lg:flex flex-col"}>
                    <div>
                       <Header styles={" my-16"}>
                            User Portal
                        </Header>
                    </div>
                    <div className="lg:flex gap-16 justify-center">
                        <SignupForm />
                        <LoginForm />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default LoginPage;
