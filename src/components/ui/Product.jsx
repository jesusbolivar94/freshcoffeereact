import React from 'react'
import PropTypes from 'prop-types'
import {formatMoney} from '../../helpers'
import useQuiosco from '../../Hooks/UseQuiosco'

const Product = ({
    name,
    price,
    image,
    category_id,
    id,
}) => {
    const {handleModalClick, handleProductClick} = useQuiosco()

    return (
        <div className="rounded-md relative bg-white overflow-hidden group/product">
            <div
                className="group-hover/product:rounded-bl-none group-hover/product:rounded-br-none group-hover/product:-translate-y-10 translate-y-0 transition shadow-md group-hover/product:shadow-lg">
                <img
                    className="w-full rounded-md"
                    src={`/img/${image}.jpg`}
                    alt={`Imagen ${name}`}
                />

                <p
                    className="absolute flex justify-end top-0 w-full group-hover/product:translate-y-10 bg-gradient-to-b transition from-stone-800 transition right-0 rounded-tr rounded-bl-md inline-flex text-right text-white text-2xl pt-2 pb-5 px-3"
                >{ formatMoney(price) }</p>

                <div className="w-full rounded-b-md absolute bottom-0 bg-gradient-to-t from-stone-900">
                    <h3 className="p-5 text-2xl text-white font-bold drop-shadow-md">{name}</h3>
                </div>
            </div>
            <button
                className="transition absolute group-hover/product:-translate-y-full bg-amber-500 text-white w-full p-3 rounded-b-md font-bold"
                onClick={() => {
                    handleModalClick()
                    handleProductClick(id)
                }}
            >Agregar</button>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

export default Product