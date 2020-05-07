import React from "react"
import { Link } from "gatsby"


const Categories = () => {
    return (
        <>
            <h2 className="mb-3">Categorías</h2>
            <div className="d-flex flex-column">
                <Link
                    variant="link"
                    activeClassName="active"
                    className="text-uppercase p-0 mb-3 text-left"
                    to="/todos">Todos</Link>
                <Link
                    variant="link"
                    activeClassName="active"
                    className="text-uppercase p-0 mb-3 text-left"
                    to="/devocionales">Reflexiones</Link>
                <Link
                    variant="link"
                    activeClassName="active"
                    className="text-uppercase p-0 mb-3 text-left"
                    to="/estudios">Estudios</Link>
            </div>
        </>
    )
}

export default Categories