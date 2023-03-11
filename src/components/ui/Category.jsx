import React from 'react'
import PropTypes from 'prop-types'
import useQuiosco from '../../Hooks/UseQuiosco'

const Category = ({id, name, icon}) => {

    const {handleCategoryClick, currentCategory} = useQuiosco()

    const activeCategory = () => currentCategory.id === id ? 'bg-amber-400' : ''

    return (
        <>
            <button
                id={id}
                className={`${activeCategory()} mb-2 flex transition items-center gap-4 rounded-md w-full p-3 hover:bg-amber-400 cursor-pointer`}
                type="button"
                onClick={() => handleCategoryClick(id)}
            >
                <img
                    className="w-12"
                    src={`/img/icono_${icon}.svg`}
                    alt={`Icono ${name}`} />
                <p className="text-lg font-bold cursor-pointer truncate"
                >{name}</p>
            </button>
        </>
    )
}

Category.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Category