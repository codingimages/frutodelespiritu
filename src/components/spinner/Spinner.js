import React from "react"

import spinner from "../../images/spinner.gif"

const Spinner = () => {
    return (
        <div className="py-5 d-flex align-items-center justify-content-center">
            <img src={spinner} alt="Spinner" />
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner