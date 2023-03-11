import {useContext} from 'react'
import QuioscoContext from '../context/QuioscoProvider.jsx'

const useQuiosco = () => useContext(QuioscoContext)

export default useQuiosco