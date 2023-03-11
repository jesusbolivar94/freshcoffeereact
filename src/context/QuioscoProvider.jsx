import {createContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import useSWR from 'swr'
import clientAxios from '../config/api'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    // Query SWR
    const fetcher = async() => {
        const {data} = await clientAxios('/api/products')
        setProducts(data.data)

        return data.data
    }

    const {data, error, isLoading} = useSWR('/api/products', fetcher, {
        refreshInterval: 1000
    })

    const handleCategoryClick = id => {
        setTimeout(() => {}, 10000)

        const category = categories.filter(category => category.id === id)
        setCurrentCategory( category[0] )
    }

    const handleModalClick = () => setModal(!modal)

    const handleProductClick = id => {
        const product = products.filter(product => product.id === id)
        setProduct( product[0] )
    }

    const handleSubmitNewOrder = async () => {

        const token = localStorage.getItem('AUTH_TOKEN')

        try {
            const {data} = await clientAxios.post('/api/orders', {
                total,
                products: order.map(product => {
                    return {
                        id: product.id,
                        quantity: product.quantity
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message)

            setTimeout(() => {
                setOrder([])
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddOrder = ({category_id, image, ...product}) => {
        if ( order.some( orderState => orderState.id === product.id ) ) {
            const updateOrder = order.map( orderState => orderState.id === product.id ? product : orderState)

            setOrder( updateOrder )
            toast.success('Guardado correctamente')

            return
        }

        setOrder([...order, product])
        toast.success('Agregado al pedido')
    }

    const handleDeleteProduct = id => {
        const updateOrder = order.filter(product => product.id !== id)

        setOrder(updateOrder)
        toast.success('Eliminado del pedido.')
    }

    const getCategories = async () => {
        try {
            const {data} = await clientAxios('/api/categories')
            setCategories(data.data)
            setCurrentCategory(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        const newTotal = order.reduce( (total, product) => (product.price * product.quantity) + total, 0 )
        setTotal( newTotal )
    }, [order])

    return (
        <QuioscoContext.Provider
            value={{
                categories,
                currentCategory,
                product,
                products: products.filter(product => product.category_id === currentCategory.id),
                modal,
                order,
                total,
                handleCategoryClick,
                handleModalClick,
                handleProductClick,
                handleAddOrder,
                handleDeleteProduct,
                handleSubmitNewOrder
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext