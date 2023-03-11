import {Product} from '../components/ui'
import useQuiosco from '../Hooks/UseQuiosco.js'
import React from 'react'

const Home = () => {

    const {currentCategory, products} = useQuiosco()

    return (
        <div className="p-5">
            <h1 className="flex align-items text-4xl font-black">{currentCategory.name}</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación.</p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {products.map( product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        category_id={product.category_id}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home