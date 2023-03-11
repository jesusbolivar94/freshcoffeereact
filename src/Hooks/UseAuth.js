import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useSWR from 'swr'
import clientAxios from '../config/api.js'

export const useAuth = ({middleware, url}) => {
    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        clientAxios(
            '/api/user',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then(res => res.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    )
    const login = async (loginForm, setErrors) => {
        try {
            const {data} = await clientAxios.post('/api/login', loginForm)

            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrors([])

            await mutate()
        } catch (e) {
            setErrors(Object.values(e.response.data.errors))
        }
    }

    const register = async (dataset, setErrors) => {
        try {
            const {data} = await clientAxios.post('/api/register', dataset)
            localStorage.setItem('AUTH_TOKEN', data.token)
            setErrors([])
            await mutate()
        } catch (e) {
            setErrors(Object.values(e.response.data.errors))
        }
    }

    const logout = async () => {
        try {
            await clientAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch(error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    useEffect(() => {
        return () => {
            if ( middleware === 'guest' && url && user ) {
                navigate(url, { replace: true })
            }

            if ( middleware === 'auth' && error ) {
                navigate('/auth/login')
            }
        }
    }, [user, error])

    return {
        login,
        register,
        logout,
        user,
        error
    }
}