import {Outlet} from 'react-router-dom'
import Modal from 'react-modal'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import {Resumen, Sidebar, ModalProduct} from '../components/ui'
import useQuiosco from '../Hooks/UseQuiosco'
import {useAuth} from '../Hooks/UseAuth'

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
}

Modal.setAppElement('#root')

const Layout = () => {
    const {user, error} = useAuth({middleware: 'auth'})
    const {modal} = useQuiosco()

    return (
        <>
            <div className="md:flex">
                <Sidebar />

                <main className="flex-1 h-screen overflow-y-scroll scrollbar-hide">
                    <Outlet/>
                </main>

                <Resumen />
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProduct />
            </Modal>

            <ToastContainer />
        </>
    )
}

export default Layout