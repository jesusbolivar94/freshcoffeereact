import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <main className="max-w-4xl m-auto flex flex-col md:flex-row items-center">
            <img
                className="max-w-xs"
                src="../img/logo.svg"
                alt="Logo"
            />
            <div className="p-10 w-full">
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout