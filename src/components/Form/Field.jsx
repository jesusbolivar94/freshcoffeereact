import React from 'react'
import PropTypes from 'prop-types'

const Field = ({name, label, type, placeholder, reference}) => {
    return (
        <>
            <label
                className="text-slate-800"
                htmlFor={name}
            >{label}</label>
            <input
                className="mt-2 w-full bg-gray-100 p-3 rounded-md"
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                ref={reference}
            />
        </>
    )
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    reference: PropTypes.object
}

export default Field