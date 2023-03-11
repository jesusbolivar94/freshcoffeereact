import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from '.'

const Alerts = ({errors}) => {
    if ( errors ) {
        return (
            <div className="py-4">
                {errors.map((error, n) => {
                    return (
                        <Alert key={`errorN${n}`}>{error}</Alert>
                    )
                })}
            </div>
        )
    }
}

Alerts.propTypes = {
    errors: PropTypes.array.isRequired
}

export default Alerts
