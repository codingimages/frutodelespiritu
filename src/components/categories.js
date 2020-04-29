import React from "react"
import Button from "react-bootstrap/Button"


const Categories = () => {
    return (
        <>
            <h2>Categorías</h2>
            <div className="d-flex flex-column">
                <Button
                    variant="link"
                    className="text-uppercase p-0 mb-3 text-left"
                    href="/todos">Todos</Button>
                <Button
                    variant="link"
                    className="text-uppercase p-0 mb-3 text-left"
                    href="/devocionales">Devocionales</Button>
                <Button
                    variant="link"
                    className="text-uppercase p-0 mb-3 text-left"
                    href="/estudios">Estudios</Button>
                <Button
                    variant="link"
                    className="text-uppercase p-0 mb-3 text-left"
                    href="/noticias">Noticias</Button>
            </div>
        </>
    )
}

export default Categories