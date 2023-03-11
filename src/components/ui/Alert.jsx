
const Alert = ({children}) => {
    return (
        <div className="text-center mb-3 bg-red-500 text-sm text-white font-semibold py-2 px-3 shadow rounded-md">
            {children}
        </div>
    )
}

export default Alert
