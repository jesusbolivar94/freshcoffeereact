import {useState, useEffect} from 'react'
import useQuiosco from '../../Hooks/UseQuiosco'
import {formatMoney} from '../../helpers'

const ModalProduct = () => {
    const {handleModalClick, handleAddOrder, product, order} = useQuiosco()
    const [quantity, setQuantity] = useState(1)
    const [edition, setEdition] = useState(false)

    useEffect(() => {
        if ( order.some( orderState => orderState.id === product.id ) ) {
            const productEdition = order.filter( orderState => orderState.id === product.id )[0]

            setQuantity( productEdition.quantity )
            setEdition(true)
        }
    }, [order])

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <img
                    className="rounded-md"
                    src={`/img/${product.image}.jpg`}
                    alt={`Imagen producto ${product.name}`}/>
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        onClick={() => handleModalClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <h1 className="text-3xl font-bold">{product.name}</h1>

                <p className="mt-5 font-bold text-5xl text-amber-500">{formatMoney(product.price)}</p>

                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if(quantity <= 1) return
                            setQuantity( quantity - 1 )
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <p className="text-3xl">{quantity}</p>
                    <button
                        type="button"
                        onClick={() => {
                            if(quantity >= 5) return
                            setQuantity( quantity + 1 )
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 transition px-5 py-2 mt-5 text-white font-bold rounded"
                    onClick={() => {
                        handleAddOrder({...product, quantity})
                        handleModalClick()
                    }}
                >{ edition ? 'Guardar cambios' : 'Añadir al pedido'}</button>
            </div>
        </div>
    )
}

export default ModalProduct
