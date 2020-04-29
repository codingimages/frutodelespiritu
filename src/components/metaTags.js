import React from "react"
import { Helmet } from "react-helmet"


const MetaTags = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css?family=Delius+Unicase:700|Rubik&display=swap" rel="stylesheet" />

        </Helmet>
    )
}

export default MetaTags