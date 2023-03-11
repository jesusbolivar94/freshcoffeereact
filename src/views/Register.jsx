
import {createRef, useState} from 'react'
import {Field} from '../components/Form'
import {Link} from 'react-router-dom'
import {Alerts} from '../components/ui'
import {useAuth} from '../Hooks/UseAuth'

const Register = () => {

    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()

    const [errors, setErrors] = useState([])
    const {register} = useAuth({middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault()

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        register(data, setErrors)
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p className="mb-5">Crea tu cuenta llenando el formulario</p>

            <Alerts errors={errors} />

            <div className="bg-white shadow-md rounded-md px-5 py-10">
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    noValidate>

                    <div className="mb-4">
                        <Field
                            label="Nombre"
                            name="name"
                            type="text"
                            placeholder="Tu nombre"
                            reference={nameRef}
                        />
                    </div>

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

                    <div className="mb-4">
                        <Field
                            label="Repetir Password"
                            name="password_confirmation"
                            type="password"
                            placeholder="Repetir password"
                            reference={passwordConfirmationRef}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 rounded-md hover:bg-indigo-800 transition text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    >Crear cuenta
                    </button>
                </form>
            </div>

            <nav className="mt-5">
                <p
                >¿Ya tienes cuenta?
                    <Link
                        to="/auth/login"
                        className="text-amber-500 font-semibold"
                    > Inicia sesión</Link>
                </p>
            </nav>
        </>
    )
}

export default Register