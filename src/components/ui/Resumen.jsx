import useQuiosco from '../../Hooks/UseQuiosco'
import {ResumenItem} from './'
import {formatMoney} from '../../helpers/index.js'

const Resumen = () => {

    const {order, total} = useQuiosco()

    const checkOrder = () => order.length === 0

    return (
        <aside className="w-72 h-screen overflow-y-scroll scrollbar-hide p-5">
            <h1 className="text-4xl font-black">Mi Pedido</h1>
            <p className="text-lg my-5">Aquí podras ver el resumen y totales de tu pedido.</p>

            <div className="py-10">
                { order.length === 0 ? (
                    <p className="text-center text-2xl">
                        No hay elementos en tu pedido aún.
                    </p>
                ) : (
                    order.map(product => (<ResumenItem key={product.id} product={product}/>))
                )}
            </div>

            <p className="text-xl mt-10">
                Total: {formatMoney(total)}
            </p>

            <form action="" className="w-full">
                <div className="mt-5">
                    <button
                        type="submit"
                        className={`${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800 cursor-pointer'} transition uppercase px-5 py-2 rounded font-bold text-white text-center w-full`}
                        disabled={checkOrder()}
                    >Confirmar Pedido</button>
                </div>
            </form>
        </aside>
    )
}

export default Resumen