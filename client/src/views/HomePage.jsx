import LoginForm from "../components/authForms/LoginForm";
import SignupForm from "../components/authForms/SignupForm";
import Container from "../components/script-ui/Container";

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
                        <div className="flex flex-row items-center gap-4">
                            {/* <button className="bg-green-500 text-slate-900  w-20 h-8 rounded font-bold">
                                Sign Up
                            </button>
                            <button className="font-bold w-20 h-8 text-slate-900">
                                Log In
                            </button> */}
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-32">
                <Container>
                    <div className="mb-16 lg:flex flex-row items-center w-full">
                        <div className="lg:w-2/5 glass-card p-4">
                            <h2 className="max-lg:text-sm text-green-600 mb-1">
                                Feature
                            </h2>
                            <h1 className="font-bold text-lg mb-2">
                                Plaid API Integration
                            </h1>
                            <p className="text-sm mb-4 font-light">
                                Supercharge your financial journey with our app
                                powered by the Plaid API. Seamlessly connect
                                your accounts to gain real-time insights into
                                your finances. Take control of your money, track
                                expenses, and make smarter decisions—all with
                                the help of Plaid&apos;s secure and powerful
                                integration. Start your path to financial
                                success today!
                            </p>
                        </div>
                        {/* <div className="lg:w-3/5 lg:h-64 lg:flex items-center justify-end">
                            <p className="">Graphic</p>
                        </div> */}
                    </div>
                    <div className="mb-16 lg:flex flex-row items-center w-full">
                        {/* <div className="lg:w-3/5 lg:h-64lg:flex items-center">
                            <p className="">Graphic</p>
                        </div> */}
                        <div className="lg:w-2/5 glass-card p-4">
                            <h2 className="max-lg:text-sm text-green-600 mb-1">
                                Feature
                            </h2>
                            <h1 className="font-bold text-lg mb-2">
                                Budget Keeping
                            </h1>
                            <p className="text-sm mb-4 font-light">
                                Elevate your budgeting game with our app&apos;s
                                advanced budget-keeping features. Effortlessly
                                create budgets, track spending, and visualize
                                your financial goals in real time. Harness the
                                power of intelligent budgeting tools to take
                                charge of your money and pave the way to a more
                                secure financial future.
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex flex-row items-center w-full">
                        <div className="lg:w-2/5 p-4 glass-card">
                            <h2 className="max-lg:text-sm text-green-600 mb-1">
                                Feature
                            </h2>
                            <h1 className="font-bold text-lg mb-2">
                                Goal Setting
                            </h1>
                            <p className="text-sm mb-4 font-light">
                                Turn your dreams into reality with our app&apos;s
                                goal-setting capabilities. Set and monitor your
                                financial objectives with ease, whether it&apos;s
                                saving for a vacation, paying off debt, or
                                building an emergency fund. Empower yourself to
                                achieve your aspirations, backed by our
                                intuitive goal-setting tools designed to keep
                                you on track and motivated throughout your
                                financial journey.
                            </p>
                        </div>
                        {/* <div className="lg:w-3/5 lg:h-64 lg:flex items-center justify-end">
                            <p className="">Graphic</p>
                        </div> */}
                    </div>
                </Container>
            </div>
            <div className="my-32">
                <Container className={"lg:flex flex-col"}>
                    <div>
                        <h1 className="text-center font-bold text-lg mb-16">
                            Sign Up Below
                        </h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center max-lg:items-center lg:gap-16">
                        <SignupForm />
                        <LoginForm />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default LoginPage;
