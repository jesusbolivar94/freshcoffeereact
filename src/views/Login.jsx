import {createRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {Field} from '../components/Form'
import {useAuth} from '../Hooks/UseAuth'
import {Alerts} from '../components/ui'

const Login = () => {

    const emailRef = createRef()
    const passwordRef = createRef()

    const [errors, setErrors] = useState([])
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const loginForm = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        await login(loginForm, setErrors)
    }

    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p className="mb-5">Para crear un pedido debes iniciar sesión</p>

            <Alerts errors={errors} />

            <div className="bg-white shadow-md rounded-md px-5 py-10">
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    noValidate>

                    <div className="mb-4">
                        <Field
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Tu email"
                            reference={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <Field
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Tu password"
                            reference={passwordRef}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 rounded-md hover:bg-indigo-800 transition text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    >Iniciar sesión
                    </button>
                </form>
            </div>

            <nav className="mt-5">
                <p
                >¿No tienes cuenta?
                    <Link
                        to="/auth/register"
                        className="text-amber-500 font-semibold"
                    > Crea una cuenta</Link>
                </p>
            </nav>
        </>
    );
};

export default Login