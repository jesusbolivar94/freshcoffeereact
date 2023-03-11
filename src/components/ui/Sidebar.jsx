import useQuiosco from '../../Hooks/UseQuiosco'
import {Category} from './'
import {useAuth} from '../../Hooks/UseAuth'

const Sidebar = () => {
    const {categories} = useQuiosco()
    const {logout, user} = useAuth({middleware: 'auth'})

    return (
        <aside className="md:w-72 pl-4">
            <div className="p-4">
                <img
                    className="w-40"
                    src="img/logo.svg"
                    alt="Logo"
                />
            </div>

            <p className="my-10 text-xl text-center">Hola: {user?.name}</p>

            <div className="mt-10">
                {categories.map(category => (
                    <Category
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        icon={category.icon}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button
                    className="text-center bg-red-500 rounded-md hover:bg-red-600 transition w-full p-3 font-bold text-white truncate"
                    onClick={() => logout()}
                >Cancelar Orden</button>
            </div>
        </aside>
    )
}

export default Sidebar